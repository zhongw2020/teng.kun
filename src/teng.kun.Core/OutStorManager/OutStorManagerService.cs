// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 OutStorManagerServiceBase
// </once-generated>
//
//  <copyright file="IOutStorManagerService.cs" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

using System;


namespace teng.kun.OutStorManager
{
    /// <summary>
    /// 业务实现基类：出库管理模块
    /// </summary>
    public partial class OutStorManagerService : OutStorManagerServiceBase
    {
        /// <summary>
        /// 初始化一个<see cref="OutStorManagerService"/>类型的新实例
        /// </summary>
        public OutStorManagerService(IServiceProvider provider)
            : base(provider)
        { }
    }
}
