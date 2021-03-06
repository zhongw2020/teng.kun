// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 ReportOutInServiceBase
// </once-generated>
//
//  <copyright file="IReportOutInService.cs" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

using System;


namespace teng.kun.ReportOutIn
{
    /// <summary>
    /// 业务实现基类：报表信息模块
    /// </summary>
    public partial class ReportOutInService : ReportOutInServiceBase
    {
        /// <summary>
        /// 初始化一个<see cref="ReportOutInService"/>类型的新实例
        /// </summary>
        public ReportOutInService(IServiceProvider provider)
            : base(provider)
        { }
    }
}
