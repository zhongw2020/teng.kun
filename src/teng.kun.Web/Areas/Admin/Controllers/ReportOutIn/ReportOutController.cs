// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 ReportOutControllerBase
// </once-generated>
//
//  <copyright file="ReportOut.cs" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

using System;

using OSharp.Filter;

using teng.kun.ReportOutIn;


namespace teng.kun.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 管理控制器: 出库报表信息
    /// </summary>
    public class ReportOutController : ReportOutControllerBase
    {
        /// <summary>
        /// 初始化一个<see cref="ReportOutController"/>类型的新实例
        /// </summary>
        public ReportOutController(IReportOutInContract reportOutInContract,
            IFilterService filterService)
            : base(reportOutInContract, filterService)
        { }
    }
}
