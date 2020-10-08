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
        public virtual async Task<AjaxResult> UpdateClose(OutStorInputDto[] dtos)
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
        [Description("出库作废")]
        public virtual async Task<AjaxResult> UpdateAbolish(OutStorInputDto[] dtos)
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
        private string ConnectionString = "Server=.\\SQLZHONG;Database=tengkun;User ID=sa;Password=123456;MultipleActiveResultSets=true";

        public IActionResult PrintData()
        {
            string id = Request.Query["id"];
          
            string sql = @"SELECT *  FROM [TENGKUN].[dbo].[OutStorManager_OutStor] where OutstorVoucher='"+id+"'";

            DataSet salesoutline = sq.Select_DateSet_Sqlserver(ConnectionString, sql);

            return Json(salesoutline);
        }
    }
}
