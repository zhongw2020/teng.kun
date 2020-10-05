// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1.横向扩展：如需给当前控制器添加API，请在控制器类型 ExtraBpController.cs 进行添加
//      2.纵向扩展：如需要重写当前控制器的API实现，请在控制器类型 ExtraBpController.cs 进行继承重写
// </auto-generated>
//
//  <copyright file="ExtraBpBase.generated.cs" company="teng.kun">
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

using teng.kun.Bpm;
using teng.kun.Bpm.Dtos;
using teng.kun.Bpm.Entities;


namespace teng.kun.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 管理控制器基类: 加班流程信息
    /// </summary>
    [ModuleInfo(Position = "Bpm", PositionName = "流程管理模块")]
    [Description("管理-加班流程信息")]
    public abstract class ExtraBpControllerBase : AdminApiController
    {
        /// <summary>
        /// 初始化一个<see cref="ExtraBpController"/>类型的新实例
        /// </summary>
        protected ExtraBpControllerBase(IBpmContract bpmContract,
            IFilterService filterService)
        {
            BpmContract = bpmContract;
            FilterService = filterService;
        }

        /// <summary>
        /// 获取或设置 数据过滤服务对象
        /// </summary>
        protected IFilterService FilterService { get; }

        /// <summary>
        /// 获取或设置 流程管理模块业务契约对象
        /// </summary>
        protected IBpmContract BpmContract { get; }
        
        /// <summary>
        /// 读取加班流程列表信息
        /// </summary>
        /// <param name="request">页请求信息</param>
        /// <returns>加班流程列表分页信息</returns>
        [HttpPost]
        [ModuleInfo]
        [Description("读取")]
        public virtual PageData<ExtraBpOutputDto> Read(PageRequest request)
        {
            Check.NotNull(request, nameof(request));

            Expression<Func<ExtraBp, bool>> predicate = FilterService.GetExpression<ExtraBp>(request.FilterGroup);
            var page = BpmContract.ExtraBps.ToPage<ExtraBp, ExtraBpOutputDto>(predicate, request.PageCondition);

            return page.ToPageData();
        }
        
        /// <summary>
        /// 新增加班流程信息
        /// </summary>
        /// <param name="dtos">加班流程信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("新增")]
        public virtual async Task<AjaxResult> Create(ExtraBpInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            OperationResult result = await BpmContract.CreateExtraBps(dtos);
            return result.ToAjaxResult();
        }
        
        /// <summary>
        /// 更新加班流程信息
        /// </summary>
        /// <param name="dtos">加班流程信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("更新")]
        public virtual async Task<AjaxResult> Update(ExtraBpInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            OperationResult result = await BpmContract.UpdateExtraBps(dtos);
            return result.ToAjaxResult();
        }
        
        /// <summary>
        /// 删除加班流程信息
        /// </summary>
        /// <param name="ids">加班流程信息编号</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("删除")]
        public virtual async Task<AjaxResult> Delete(int[] ids)
        {
            Check.NotNull(ids, nameof(ids));
            OperationResult result = await BpmContract.DeleteExtraBps(ids);
            return result.ToAjaxResult();
        }
        /// <summary>
        /// 审批加班流程信息
        /// </summary>
        /// <param name="dtos">加班流程信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("审批")]
        public virtual async Task<AjaxResult> UpdateVerify(ExtraBpInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            OperationResult result = await BpmContract.UpdateExtraBps(dtos);
            return result.ToAjaxResult();
        }

    }
}
