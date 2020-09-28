// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 SupBasedataControllerBase
// </once-generated>
//
//  <copyright file="SupBasedata.cs" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

using System;

using OSharp.Filter;

using teng.kun.BaseModule;


namespace teng.kun.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 管理控制器: 供应商基础数据信息
    /// </summary>
    public class SupBasedataController : SupBasedataControllerBase
    {
        /// <summary>
        /// 初始化一个<see cref="SupBasedataController"/>类型的新实例
        /// </summary>
        public SupBasedataController(IBaseModuleContract baseModuleContract,
            IFilterService filterService)
            : base(baseModuleContract, filterService)
        { }
    }
}
