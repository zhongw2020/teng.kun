// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 InStorManagerServiceBase
// </once-generated>
//
//  <copyright file="IInStorManagerService.cs" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

using System;


namespace teng.kun.InStorManager
{
    /// <summary>
    /// 业务实现基类：入库管理模块
    /// </summary>
    public partial class InStorManagerService : InStorManagerServiceBase
    {
        /// <summary>
        /// 初始化一个<see cref="InStorManagerService"/>类型的新实例
        /// </summary>
        public InStorManagerService(IServiceProvider provider)
            : base(provider)
        { }
    }
}
