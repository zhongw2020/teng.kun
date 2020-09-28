// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 Test09ControllerBase
// </once-generated>
//
//  <copyright file="Test09.cs" company="teng.kun">
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
    /// 管理控制器: test09信息
    /// </summary>
    public class Test09Controller : Test09ControllerBase
    {
        /// <summary>
        /// 初始化一个<see cref="Test09Controller"/>类型的新实例
        /// </summary>
        public Test09Controller(IOutStorManagerContract outStorManagerContract,
            IFilterService filterService)
            : base(outStorManagerContract, filterService)
        { }
    }
}
