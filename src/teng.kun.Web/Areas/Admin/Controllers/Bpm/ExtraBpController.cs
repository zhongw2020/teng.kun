// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 ExtraBpControllerBase
// </once-generated>
//
//  <copyright file="ExtraBp.cs" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

using System;

using OSharp.Filter;

using teng.kun.Bpm;


namespace teng.kun.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 管理控制器: 加班流程信息
    /// </summary>
    public class ExtraBpController : ExtraBpControllerBase
    {
        /// <summary>
        /// 初始化一个<see cref="ExtraBpController"/>类型的新实例
        /// </summary>
        public ExtraBpController(IBpmContract bpmContract,
            IFilterService filterService)
            : base(bpmContract, filterService)
        { }
    }
}
