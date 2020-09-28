// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 EmpBasedataControllerBase
// </once-generated>
//
//  <copyright file="EmpBasedata.cs" company="teng.kun">
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
    /// 管理控制器: 员工基础数据信息
    /// </summary>
    public class EmpBasedataController : EmpBasedataControllerBase
    {
        /// <summary>
        /// 初始化一个<see cref="EmpBasedataController"/>类型的新实例
        /// </summary>
        public EmpBasedataController(IBaseModuleContract baseModuleContract,
            IFilterService filterService)
            : base(baseModuleContract, filterService)
        { }
    }
}
