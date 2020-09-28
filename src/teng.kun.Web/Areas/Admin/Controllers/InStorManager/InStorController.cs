// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 InStorControllerBase
// </once-generated>
//
//  <copyright file="InStor.cs" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

using System;

using OSharp.Filter;

using teng.kun.InStorManager;


namespace teng.kun.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 管理控制器: 入库信息
    /// </summary>
    public class InStorController : InStorControllerBase
    {
        /// <summary>
        /// 初始化一个<see cref="InStorController"/>类型的新实例
        /// </summary>
        public InStorController(IInStorManagerContract inStorManagerContract,
            IFilterService filterService)
            : base(inStorManagerContract, filterService)
        { }
    }
}
