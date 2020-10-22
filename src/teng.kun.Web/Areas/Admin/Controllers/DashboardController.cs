// -----------------------------------------------------------------------
//  <copyright file="DashboardController.cs" company="OSharp开源团队">
//      Copyright (c) 2014-2018 OSharp. All rights reserved.
//  </copyright>
//  <site>http://www.osharp.org</site>
//  <last-editor></last-editor>
//  <last-date>2018-07-26 16:07</last-date>
// -----------------------------------------------------------------------

using System;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;

using teng.kun.Authorization;
using teng.kun.Identity.Entities;

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

using OSharp.AspNetCore.Mvc;
using OSharp.Authorization;
using OSharp.Authorization.Functions;
using OSharp.Authorization.Modules;
using OSharp.Caching;
using OSharp.Entity;


using teng.kun.InStorManager.Dtos;
using teng.kun.InStorManager.Entities;
using Microsoft.Extensions.DependencyInjection;
using teng.kun.InStorManager;
using OSharp.AspNetCore.UI;
using OSharp.Data;
using teng.kun.Common;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Data;

namespace teng.kun.Web.Areas.Admin.Controllers
{
    [ModuleInfo(Order = 1)]
    [Description("管理-信息汇总")]
    public class DashboardController : AdminApiController
    {
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly FunctionAuthManager _functionAuthorizationManager;
        private readonly DataAuthManager _dataAuthorizationManager;
        private readonly ICacheService _cacheService;


        private SqlHelper sq = new SqlHelper();
        private string ConnectionString = "Server=.\\SQLZHONG;Database=tengkun;User ID=sa;Password=TengKun777;MultipleActiveResultSets=true";

        protected IServiceProvider ServiceProvider { get; }
        protected IRepository<InStor, int> InStorRepository => ServiceProvider.GetService<IRepository<InStor, int>>();
        /// <summary>
        /// 初始化一个<see cref="DashboardController"/>类型的新实例
        /// </summary>
        public DashboardController(UserManager<User> userManager,
            RoleManager<Role> roleManager,
            FunctionAuthManager functionAuthorizationManager,
            DataAuthManager dataAuthorizationManager,
            ICacheService cacheService)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _functionAuthorizationManager = functionAuthorizationManager;
            _dataAuthorizationManager = dataAuthorizationManager;
            _cacheService = cacheService;
        }

        /// <summary>
        /// 获取统计数据
        /// </summary>
        /// <param name="start">起始时间</param>
        /// <param name="end">结束时间</param>
        /// <returns>统计数据</returns>
        [HttpGet]
        [ModuleInfo]
        [LoggedIn]
        [Description("统计数据")]
        public IActionResult SummaryData(DateTime start, DateTime end)
        {
            IFunction function = this.GetExecuteFunction();
            Expression<Func<User, bool>> userExp = GetExpression<User>(start, end);

            var users = _cacheService.ToCacheList(_userManager.Users.Where(userExp).GroupBy(m => 1).Select(g => new
            {
                TotalCount = g.Sum(n => 1),
                ValidCount = g.Sum(n => n.EmailConfirmed ? 1 : 0)
            }),
                function,
                "Dashboard_Summary_User",
                start,
                end).FirstOrDefault() ?? new { TotalCount = 0, ValidCount = 0 };
            var roles = _cacheService.ToCacheList(_roleManager.Roles.GroupBy(m => 1).Select(g => new
            {
                TotalCount = g.Sum(n => 1),
                AdminCount = g.Sum(n => n.IsAdmin ? 1 : 0)
            }),
                function,
                "Dashboard_Summary_Role",
                start,
                end).FirstOrDefault() ?? new { TotalCount = 0, AdminCount = 0 };
            var modules = _cacheService.ToCacheList(_functionAuthorizationManager.Modules.GroupBy(m => 1).Select(g => new
            {
                TotalCount = g.Sum(n => 1),
                SiteCount = g.Sum(n => n.TreePathString.Contains("$2$") ? 1 : 0),
                AdminCount = g.Sum(m => m.TreePathString.Contains("$3$") ? 1 : 0)
            }),
                function,
                "Dashboard_Summary_Module").FirstOrDefault() ?? new { TotalCount = 0, SiteCount = 0, AdminCount = 0 };
            var functions = _cacheService.ToCacheList(_functionAuthorizationManager.Functions.GroupBy(m => m.Id).Select(g => new
            {
                TotalCount = g.Sum(n => 1),
                ControllerCount = g.Sum(m => m.IsController ? 1 : 0)
            }),
                function,
                "Dashboard_Summary_Function").FirstOrDefault() ?? new { TotalCount = 0, ControllerCount = 0 };
            var entityInfos = _cacheService.ToCacheList(_dataAuthorizationManager.EntityInfos.GroupBy(m => m.Id).Select(g => new
            {
                TotalCount = g.Sum(n => 1),
                AuditCount = g.Sum(m => m.AuditEnabled ? 1 : 0)
            }),
                function,
                "Dashboard_Summary_EntityInfo").FirstOrDefault() ?? new { TotalCount = 0, AuditCount = 0 };

            var data = new { users, roles, modules, functions, entityInfos };



            return Json(data);
        }

        [HttpGet]
        [ModuleInfo]
        [LoggedIn]
        [Description("曲线数据")]
        public IActionResult LineData(DateTime start, DateTime end)
        {
            IFunction function = this.GetExecuteFunction();
            Expression<Func<User, bool>> userExp = GetExpression<User>(start, end);

            //var userData = _cacheService.ToCacheList(_userManager.Users.Where(userExp).GroupBy(m => m.CreatedTime.Date).Select(g => new
            //{
            //    Date = g.Key,
            //    DailyCount = g.Count()
            //}),
            //    function,
            //    "Dashboard_Line_User",
            //    start,
            //    end);
            //var users = userData.Select(m => new
            //{
            //    Date = m.Date.ToString("d"),
            //    m.DailyCount,
            //    DailySum = userData.Where(n => n.Date <= m.Date).Sum(n => n.DailyCount)
            //}).ToList();

            var DailyCount = 1;
            var DailySum = 10;


            var infos = new
            {
                DailyCount,
                DailySum
            };

            return Json(infos);
        }

        private static Expression<Func<TEntity, bool>> GetExpression<TEntity>(DateTime start, DateTime end)
            where TEntity : class, ICreatedTime
        {
            if (start > end)
            {
                throw new ArgumentException($"结束时间{end}不能小于开始时间{start}");
            }
            return m => m.CreatedTime.Date >= start.Date && m.CreatedTime.Date <= end.Date;
        }

        //添加报表

        //当月销售额数据
        public IActionResult ReportSeld(DateTime start, DateTime end)
        {

            string starttime = start.ToString("yyyy-MM-dd HH:mm:ss");
            string endtime = end.ToString("yyyy-MM-dd HH:mm:ss");

            //累计销售额
            string sqlall = @"SELECT convert(varchar, (sum(OutstorPrice*(OutstorNum-RecoilNum))))  FROM OutStorManager_OutStor where PrintState = 1 and Abolishflag = 0";

            string salesoutall = sq.Select_Str_Sqlserver(ConnectionString, sqlall);


            //当月入库额
            string sql = @"SELECT  convert(varchar,(sum(InstorPrice*(InstorNum-RecoilNum))))  FROM InStorManager_InStor where  Abolishflag=0 and InstorVerifyState='已通过' and InstorDate>='" + starttime + "' and InstorDate<='" + endtime + "'";

            string salesin = sq.Select_Str_Sqlserver(ConnectionString, sql);


            //当月入库额已结算
            string sql1 = @"SELECT  convert(varchar,(sum(InstorPrice*(InstorNum-RecoilNum))))  FROM InStorManager_InStor where  Abolishflag=0 and SupCloseAccuntsFlag=1 and InstorVerifyState='已通过' and InstorDate>='" + starttime + "' and InstorDate<='" + endtime + "'";

            string salesincomplete = sq.Select_Str_Sqlserver(ConnectionString, sql1);



            //当月销售额
            string sql2 = @"SELECT  convert(varchar,(sum(OutstorPrice*(OutstorNum-RecoilNum))))  FROM OutStorManager_OutStor where PrintState=1 and Abolishflag=0 and OutstorDate>='" + starttime + "' and OutstorDate<='" + endtime + "'";

            string salesout = sq.Select_Str_Sqlserver(ConnectionString, sql2);

            //当月签回额
            string sql3 = @"SELECT  convert(varchar,(sum(OutstorPrice*(OutstorNum-RecoilNum))))  FROM OutStorManager_OutStor where PrintState=1 and  Abolishflag=0 and CusCloseAccuntsFlag=1 and OutstorDate>='" + starttime + "' and OutstorDate<='" + endtime + "'";

            string salesoutcomplete = sq.Select_Str_Sqlserver(ConnectionString, sql3);

            //当月销售单数量

            string sql4 = @"select convert(varchar,count(distinct OutstorVoucher)) from OutStorManager_OutStor where Abolishflag=0 and PrintState=1 and OutstorDate>='" + starttime + "' and OutstorDate<='" + endtime + "'";

            string salesoutnum = sq.Select_Str_Sqlserver(ConnectionString, sql4);
            //当月签回销售单数量
            string sql5 = @"select convert(varchar,count(distinct OutstorVoucher)) from OutStorManager_OutStor where CusCloseAccuntsFlag=1 and Abolishflag=0 and PrintState=1 and OutstorDate>='" + starttime + "' and OutstorDate<='" + endtime + "'";

            string salesoutnumcomplete = sq.Select_Str_Sqlserver(ConnectionString, sql5);
            //当月陈伟销售额
            string sql6 = @"select convert(varchar,sum(OutstorPrice*(OutstorNum-RecoilNum))) from OutStorManager_OutStor where Abolishflag=0 and PrintState=1 and OutEmpName='陈伟' and OutstorDate>='" + starttime + "' and OutstorDate<='" + endtime + "'";
            string salesoutchenqwei = sq.Select_Str_Sqlserver(ConnectionString, sql6);
            //当月陈琦销售额
            string sql7 = @"select convert(varchar,sum(OutstorPrice*(OutstorNum-RecoilNum))) from OutStorManager_OutStor where Abolishflag=0 and PrintState=1 and OutEmpName='陈琪' and OutstorDate>='" + starttime + "' and OutstorDate<='" + endtime + "'";
            string salesoutchenqqi = sq.Select_Str_Sqlserver(ConnectionString, sql7);
            //累计利润
            string sql8 = @"select convert(varchar,sum((OutstorNum-OutStorManager_OutStor.RecoilNum)*(OutstorPrice-InstorPrice))) from OutStorManager_OutStor left join (select MatName,InstorPrice ,id from InStorManager_InStor where  id in (select max(id) from (select MatName,InstorPrice ,id from InStorManager_InStor where InStorManager_InStor.Abolishflag='0' and InStorManager_InStor.InstorVerifyState='已通过') as a group by  MatName)) as b on OutStorManager_OutStor.MatName= b.MatName  where OutStorManager_OutStor.Abolishflag=0 and OutStorManager_OutStor.PrintState=1";
            string salesoutleijilirun = sq.Select_Str_Sqlserver(ConnectionString, sql8);
            //月利润

            string sql9 = @"select convert(varchar,sum((OutstorNum-OutStorManager_OutStor.RecoilNum)*(OutstorPrice-InstorPrice))) from OutStorManager_OutStor left join (select MatName,InstorPrice ,id from InStorManager_InStor where  id in (select max(id) from (select MatName,InstorPrice ,id from InStorManager_InStor where InStorManager_InStor.Abolishflag='0' and InStorManager_InStor.InstorVerifyState='已通过') as a group by  MatName)) as b on OutStorManager_OutStor.MatName= b.MatName where OutStorManager_OutStor.Abolishflag=0 and OutStorManager_OutStor.PrintState=1 and OutstorDate>='" + starttime + "' and OutstorDate<='" + endtime + "'";
            string salesoutyuelirun = sq.Select_Str_Sqlserver(ConnectionString, sql9);

            //库存估价
            string sql10 = @"select convert(varchar,sum(CurrStock*InstorPrice)) from (select * from BaseModule_MatBasedata where MatState='1') as mattable left join (select MatName,InstorPrice ,id from InStorManager_InStor where  id in (select max(id) from (select MatName,InstorPrice ,id from InStorManager_InStor where InStorManager_InStor.Abolishflag='0' and InStorManager_InStor.InstorVerifyState='已通过') as a group by  MatName)) as b on mattable.MatName= b.MatName ";
            string kucungujia = sq.Select_Str_Sqlserver(ConnectionString, sql10);

            //日利润

            string sql11 = "";
       
            if (start.ToString("yyyy-MM-dd") != DateTime.Now.ToString("yyyy-MM-dd"))
            {
                sql11 = @"select convert(varchar,sum((OutstorNum-OutStorManager_OutStor.RecoilNum)*(OutstorPrice-InstorPrice))) from OutStorManager_OutStor left join (select MatName,InstorPrice ,id from InStorManager_InStor where  id in (select max(id) from (select MatName,InstorPrice ,id from InStorManager_InStor where InStorManager_InStor.Abolishflag='0' and InStorManager_InStor.InstorVerifyState='已通过') as a group by  MatName)) as b on OutStorManager_OutStor.MatName= b.MatName where OutStorManager_OutStor.Abolishflag=0 and OutStorManager_OutStor.PrintState=1  and LEFT(OutstorDate,10) = '" + start.ToString("yyyy-MM-dd") + "'";
            }
            else
            {
                sql11 = @"select convert(varchar,sum((OutstorNum-OutStorManager_OutStor.RecoilNum)*(OutstorPrice-InstorPrice))) from OutStorManager_OutStor left join (select MatName,InstorPrice ,id from InStorManager_InStor where  id in (select max(id) from (select MatName,InstorPrice ,id from InStorManager_InStor where InStorManager_InStor.Abolishflag='0' and InStorManager_InStor.InstorVerifyState='已通过') as a group by  MatName)) as b on OutStorManager_OutStor.MatName= b.MatName where OutStorManager_OutStor.Abolishflag=0 and OutStorManager_OutStor.PrintState=1  and LEFT(OutstorDate,10) = CONVERT(varchar(10),GETDATE(),120)";

            }
            string salesoutrilirun = sq.Select_Str_Sqlserver(ConnectionString, sql11);
            if (salesoutall == "")
            {
                salesoutall = "0";
            }
            if (salesin == "")
            {
                salesin = "0";
            }
            if (salesincomplete == "")
            {
                salesincomplete = "0";
            }
            if (salesout == "")
            {
                salesout = "0";
            }
            if (salesoutcomplete == "")
            {
                salesoutcomplete = "0";
            }
            if (salesoutnum == "")
            {
                salesoutnum = "0";
            }
            if (salesoutnumcomplete == "")
            {
                salesoutnumcomplete = "0";
            }
            if (salesoutchenqwei == "")
            {
                salesoutchenqwei = "0";
            }
            if (salesoutchenqqi == "")
            {
                salesoutchenqqi = "0";
            }
            if (salesoutleijilirun == "")
            {
                salesoutleijilirun = "0";
            }

            if (salesoutyuelirun == "")
            {
                salesoutyuelirun = "0";
            }

            if (kucungujia == "")
            {
                kucungujia = "0";
            }
            if (salesoutrilirun == "")
            {
                salesoutrilirun = "0";
            }


            var infos = new
            {
                salesoutall,
                salesin,
                salesincomplete,
                salesout,
                salesoutcomplete,
                salesoutnum,
                salesoutnumcomplete,
                salesoutchenqwei,
                salesoutchenqqi,
                salesoutleijilirun,
                salesoutyuelirun,
                kucungujia,
                salesoutrilirun,
            };

            return Json(infos);
        }
        //年度销售额
        public IActionResult ReportSeldLine()
        {
            //按月统计近一年销售额
            string sql = @"SELECT LEFT(OutstorDate,7) as salemonth,convert(varchar, (sum(OutstorPrice*(OutstorNum-RecoilNum)))) as salesout  FROM OutStorManager_OutStor where PrintState = 1 and Abolishflag = 0 and LEFT(OutstorDate,4)>DATEADD(year,-1,GETDATE()) group by  LEFT(OutstorDate,7)";

            DataSet salesoutline = sq.Select_DateSet_Sqlserver(ConnectionString, sql);

            return Json(salesoutline);
        }
        //获取通知消息
        public IActionResult ReportNotify()
        {
            string sql = @"SELECT  top 5  EmpName  from  BaseModule_EmpBasedata";
            DataSet infos = sq.Select_DateSet_Sqlserver(ConnectionString, sql);
            return Json(infos);
        }


    }
}