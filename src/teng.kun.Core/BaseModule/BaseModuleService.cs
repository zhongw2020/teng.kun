// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 BaseModuleServiceBase
// </once-generated>
//
//  <copyright file="IBaseModuleService.cs" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

using System;


namespace teng.kun.BaseModule
{
    /// <summary>
    /// 业务实现基类：基础模块模块
    /// </summary>
    public partial class BaseModuleService : BaseModuleServiceBase
    {
        /// <summary>
        /// 初始化一个<see cref="BaseModuleService"/>类型的新实例
        /// </summary>
        public BaseModuleService(IServiceProvider provider)
            : base(provider)
        { }
    }
}
