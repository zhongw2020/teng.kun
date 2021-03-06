// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1.横向扩展：如需给当前控制器添加API，请在控制器类型 OutStorController.cs 进行添加
//      2.纵向扩展：如需要重写当前控制器的API实现，请在控制器类型 OutStorController.cs 进行继承重写
// </auto-generated>
//
//  <copyright file="OutStorBase.generated.cs" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

using System;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using OSharp.AspNetCore.Mvc;
using OSharp.AspNetCore.Mvc.Filters;
using OSharp.AspNetCore.UI;
using OSharp.Caching;
using OSharp.Authorization.Functions;
using OSharp.Authorization.Modules;
using OSharp.Data;
using OSharp.Entity;
using OSharp.Filter;
using OSharp.Security;

using teng.kun.OutStorManager;
using teng.kun.OutStorManager.Dtos;
using teng.kun.OutStorManager.Entities;
using System.Data;
using teng.kun.Common;
using teng.kun.BaseModule.Entities;
using Microsoft.Extensions.Configuration;

namespace teng.kun.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 管理控制器基类: 出库信息
    /// </summary>
    [ModuleInfo(Position = "OutStorManager", PositionName = "出库管理模块")]
    [Description("管理-出库信息")]
    public abstract class OutStorControllerBase : AdminApiController
    {
        /// <summary>
        /// 初始化一个<see cref="OutStorController"/>类型的新实例
        /// </summary>
        protected OutStorControllerBase(IOutStorManagerContract outStorManagerContract,
            IFilterService filterService)
        {
            OutStorManagerContract = outStorManagerContract;
            FilterService = filterService;
        }

        /// <summary>
        /// 获取或设置 数据过滤服务对象
        /// </summary>
        protected IFilterService FilterService { get; }

        /// <summary>
        /// 获取或设置 出库管理模块业务契约对象
        /// </summary>
        protected IOutStorManagerContract OutStorManagerContract { get; }
        
        /// <summary>
        /// 读取出库列表信息
        /// </summary>
        /// <param name="request">页请求信息</param>
        /// <returns>出库列表分页信息</returns>
        [HttpPost]
        [ModuleInfo]
        [Description("读取")]
        public virtual PageData<OutStorOutputDto> Read(PageRequest request)
        {
            Check.NotNull(request, nameof(request));

            Expression<Func<OutStor, bool>> predicate = FilterService.GetExpression<OutStor>(request.FilterGroup);
            var page = OutStorManagerContract.OutStors.ToPage<OutStor, OutStorOutputDto>(predicate, request.PageCondition);
           // var page = V_OutInReportManagerContract.V_OutInReports.ToPage<V_OutInReport, V_OutInReportOutputDto>(predicate, request.PageCondition);

            return page.ToPageData();
        }
        
        /// <summary>
        /// 新增出库信息
        /// </summary>
        /// <param name="dtos">出库信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("新增")]
        public virtual async Task<AjaxResult> Create(OutStorInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            OperationResult result = await OutStorManagerContract.CreateOutStors(dtos);
            return result.ToAjaxResult();
        }



        /// <summary>
        /// 更新出库信息
        /// </summary>
        /// <param name="dtos">出库信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("更新")]
        public virtual async Task<AjaxResult> Update(OutStorInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            OperationResult result = await OutStorManagerContract.UpdateOutStors(dtos);
            return result.ToAjaxResult();
        }

        /// <summary>
        /// 更新出库信息
        /// </summary>
        /// <param name="dtos">出库信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("出库反冲")]
        public virtual async Task<AjaxResult> UpdateRecoil(OutStorInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            OperationResult result = await OutStorManagerContract.UpdateRecoilOutStors(dtos);
            return result.ToAjaxResult();
        }

        /// <summary>
        /// 更新出库信息
        /// </summary>Abolish
        /// <param name="dtos">出库信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("出库签回")]
        public virtual async Task<AjaxResult> UpdateClose(OutStorInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            OperationResult result = await OutStorManagerContract.UpdateOutStors(dtos);
            return result.ToAjaxResult();
        }

        /// <summary>
        /// 更新出库信息
        /// </summary>Abolish
        /// <param name="dtos">出库信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("批量出库签回")]
        public virtual async Task<AjaxResult> UpdateCloseAll(OutStorInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            foreach (OutStorInputDto dto in dtos)
            {
                dto.CusCloseAccuntsFlag = true;
            }

            OperationResult result = await OutStorManagerContract.UpdateOutStors(dtos);
            return result.ToAjaxResult();
        }


        /// <summary>
        /// 更新出库信息
        /// </summary>Abolish
        /// <param name="dtos">出库信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("出库结算")]
        public virtual async Task<AjaxResult> Updatejiesuan(OutStorInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            OperationResult result = await OutStorManagerContract.UpdateOutStors(dtos);
            return result.ToAjaxResult();
        }


        /// <summary>
        /// 更新出库信息
        /// </summary>Abolish
        /// <param name="dtos">出库信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("批量出库结算")]
        public virtual async Task<AjaxResult> UpdatejiesuanAll(OutStorInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            foreach (OutStorInputDto dto in dtos)
            {
                dto.CusjiesuanAccuntsFlag = true;
            }
            OperationResult result = await OutStorManagerContract.UpdateOutStors(dtos);
            return result.ToAjaxResult();
        }

        /// <summary>
        /// 更新出库信息
        /// </summary>
        /// <param name="dtos">出库信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("出库作废")]
        public virtual async Task<AjaxResult> UpdateAbolish(OutStorInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            OperationResult result = await OutStorManagerContract.UpdateOutStors(dtos);
            return result.ToAjaxResult();
        }

        /// <summary>
        /// 更新出库打印信息（暂时未使用）
        /// </summary>
        /// <param name="dtos">出库打印信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("出库打印")]
        public virtual async Task<AjaxResult> UpdatePrint(OutStorInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            OperationResult result = await OutStorManagerContract.UpdateOutStors(dtos);
            return result.ToAjaxResult();
        }


        /// <summary>
        /// 删除出库信息
        /// </summary>
        /// <param name="ids">出库信息编号</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("删除")]
        public virtual async Task<AjaxResult> Delete(int[] ids)
        {
            Check.NotNull(ids, nameof(ids));
            OperationResult result = await OutStorManagerContract.DeleteOutStors(ids);
            return result.ToAjaxResult();
        }


        /// <summary>
        /// 读取出库列表信息
        /// </summary>
        /// <param name="request">页请求信息</param>
        /// <returns>出库列表分页信息</returns>
        [HttpPost]
        [ModuleInfo]
        [Description("报表")]
        public virtual PageData<OutStorOutputDto> ReadReport(PageRequest request)
        {
            Check.NotNull(request, nameof(request));

            Expression<Func<OutStor, bool>> predicate = FilterService.GetExpression<OutStor>(request.FilterGroup);
            var page = OutStorManagerContract.OutStors.ToPage<OutStor, OutStorOutputDto>(predicate, request.PageCondition);

            return page.ToPageData();
        }

        private SqlHelper sq = new SqlHelper();
        
        private string ConnectionString = "Server=.\\SQLZHONG;Database=tengkun;User ID=sa;Password=TengKun777;MultipleActiveResultSets=true";

        /// <summary>
        /// 读取出库列表信息
        /// </summary>
        /// <param name="request">页请求信息</param>
        /// <returns>出库列表分页信息</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("未签回报表")]

        public IActionResult ReportRead()
        {
            string sql = @"SELECT  * FROM  OutStorManager_OutStor where PrintState=1 and Abolishflag=0 and RecoilNum<OutstorNum and CusCloseAccuntsFlag=0 order by OutEmpName";
            DataSet Datas = sq.Select_DateSet_Sqlserver(ConnectionString, sql);
            DataTable Rows = Datas.Tables[0];
            var Total = Rows.Rows.Count;
            var Viewdata = new { Rows, Total };
            return Json(Viewdata);
        }

        /// <summary>
        /// 读取出库列表信息
        /// </summary>
        /// <param name="request">页请求信息</param>
        /// <returns>出库列表分页信息</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("疑问报表")]

        public IActionResult ReportAns()
        {
            string sql = @"select OutstorNum,OutStorManager_OutStor.RecoilNum,OutstorPrice,InstorPrice,OutstorToIn,OutStorManager_OutStor.MatName,OutstorVoucher from OutStorManager_OutStor left join (select MatName,InstorPrice ,id,InstorVoucher from InStorManager_InStor where  InStorManager_InStor.Abolishflag='0' )  as b on OutStorManager_OutStor.MatName= b.MatName and OutstorToIn=b.InstorVoucher  where OutStorManager_OutStor.Abolishflag=0 and OutStorManager_OutStor.PrintState=1 and OutstorCategory='常规' and InstorPrice is null and OutstorNum>RecoilNum order by OutstorVoucher desc";
            DataSet Datas = sq.Select_DateSet_Sqlserver(ConnectionString, sql);
            DataTable Rows = Datas.Tables[0];
            var Total = Rows.Rows.Count;
            var Viewdata = new { Rows, Total };
            return Json(Viewdata);
        }


        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("打印")]
        //打印数据
        public IActionResult PrintData()
        {
    
        string id = Request.Query["id"];
            string ComName = Request.Query["ComName"];
            string Item = Request.Query["Item"];

            string sql = "";
            if (ComName == "腾坤")
            {
                 sql = @"SELECT ot.*,mat.MatAlias01 as printname,MatUnit  FROM OutStorManager_OutStor as ot left join BaseModule_MatBasedata as mat on ot.MatId=mat.Id  where  Abolishflag='0' and OutstorVoucher='" + id + "'";
            }
            if (ComName == "华业")
            {
                 sql = @"SELECT ot.*,mat.MatAlias02 as printname,MatUnit  FROM OutStorManager_OutStor as ot left join BaseModule_MatBasedata as mat on ot.MatId=mat.Id  where  Abolishflag='0' and OutstorVoucher='" + id + "'";
            }
            if (ComName == "效信通")
            {
                 sql = @"SELECT ot.*,mat.MatAlias03 as printname,MatUnit FROM OutStorManager_OutStor as ot left join BaseModule_MatBasedata as mat on ot.MatId=mat.Id  where  Abolishflag='0' and OutstorVoucher='" + id + "'";
            }
            if (ComName == "帅坤")
            {
                 sql = @"SELECT ot.*,mat.MatAlias04 as printname,MatUnit FROM OutStorManager_OutStor as ot left join BaseModule_MatBasedata as mat on ot.MatId=mat.Id  where  Abolishflag='0' and OutstorVoucher='" + id + "'";
            }
            if (ComName == "华宇")
            {
                sql = @"SELECT ot.*,mat.MatAlias04 as printname,MatUnit FROM OutStorManager_OutStor as ot left join BaseModule_MatBasedata as mat on ot.MatId=mat.Id  where  Abolishflag='0' and OutstorVoucher='" + id + "'";
            }


            DataSet salesoutline = sq.Select_DateSet_Sqlserver(ConnectionString, sql);
            
            string sqlsum = @"select convert(varchar,sum((OutstorNum-RecoilNum)*OutstorPrice)) FROM OutStorManager_OutStor as ot left join BaseModule_MatBasedata as mat on ot.MatId=mat.Id  where  Abolishflag='0' and OutstorVoucher='" + id + "'";
            string salesout = sq.Select_Str_Sqlserver(ConnectionString, sqlsum);

            sql = @"SELECT ot.*,mat.MatAlias04  FROM OutStorManager_OutStor as ot left join BaseModule_MatBasedata as mat on ot.MatId=mat.Id  where OutstorVoucher='" + id + "'";
            var alldata = new { salesoutline, salesout };



            //查看打印状态
            string sqlselectmatid = @"select  convert(varchar,MatId) from OutStorManager_OutStor where PrintState=0 and Id='" + Item + "'";
            string currstormatid = sq.Select_Str_Sqlserver(ConnectionString, sqlselectmatid);
            //如果未打印
            if (currstormatid != "")
            {
                string sqlselectmat = @"select MatId,OutstorNum,OutstorCategory from OutStorManager_OutStor where PrintState=0 and OutstorVoucher='" + id + "'"; ;
                DataSet currstormat = sq.Select_DateSet_Sqlserver(ConnectionString, sqlselectmat);


                if (currstormat.Tables[0] != null)
                {
                    //修改打印状态
                    string sqlprintstate = @"update  OutStorManager_OutStor set PrintState=1  where   OutstorVoucher='" + id + "'";
                    int updatenum = sq.Update_Sqlserver(ConnectionString, sqlprintstate);

                    for (int i = 0; i < currstormat.Tables[0].Rows.Count; i++)
                    {
                        if(currstormat.Tables[0].Rows[i]["OutstorCategory"].ToString()=="常规")
                        { 
                        //修改库存
                        string MatId = currstormat.Tables[0].Rows[i]["MatId"].ToString();
                        string OutstorNum = currstormat.Tables[0].Rows[i]["OutstorNum"].ToString();

                        string sqloutstornum = @"update  BaseModule_MatBasedata set CurrStock=CurrStock-"+OutstorNum + " where   Id='" + MatId + "'";
                        int updateoutstor = sq.Update_Sqlserver(ConnectionString, sqloutstornum);
                        }
                    }

                }
            }
            return Json(alldata);
            
        }

        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("导出")]
        //导出未签回数据
        public IActionResult exp_weiqianhui()
        {

            string sqlselectmat = @"select MatId,OutstorNum,OutstorCategory from OutStorManager_OutStor where PrintState=1"; 
            DataSet currstormat = sq.Select_DateSet_Sqlserver(ConnectionString, sqlselectmat);
            return Json(currstormat);
        
        }
    }
}
