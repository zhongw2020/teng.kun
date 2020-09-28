// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 OutStorControllerBase
// </once-generated>
//
//  <copyright file="OutStor.cs" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

using System;

using OSharp.Filter;

using teng.kun.OutStorManager;


namespace teng.kun.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 管理控制器: 出库信息
    /// </summary>
    public class OutStorController : OutStorControllerBase
    {
        /// <summary>
        /// 初始化一个<see cref="OutStorController"/>类型的新实例
        /// </summary>
        public OutStorController(IOutStorManagerContract outStorManagerContract,
            IFilterService filterService)
            : base(outStorManagerContract, filterService)
        { }
    }
}
