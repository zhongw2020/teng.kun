// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 BpmServiceBase
// </once-generated>
//
//  <copyright file="IBpmService.cs" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

using System;


namespace teng.kun.Bpm
{
    /// <summary>
    /// 业务实现基类：流程管理模块
    /// </summary>
    public partial class BpmService : BpmServiceBase
    {
        /// <summary>
        /// 初始化一个<see cref="BpmService"/>类型的新实例
        /// </summary>
        public BpmService(IServiceProvider provider)
            : base(provider)
        { }
    }
}
