// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类的AddServices方法给“OutStorManager”模块添加自定义服务配对，或者在UsePack方法进行模块初始化
// </once-generated>
//
//  <copyright file="IOutStorManagerPack.cs" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

using System;
using System.ComponentModel;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

using OSharp.Core.Packs;


namespace teng.kun.OutStorManager
{
    /// <summary>
    /// 出库管理模块
    /// </summary>
    [Description("出库管理模块")]
    public class OutStorManagerPack : OsharpPack
    {
        /// <summary>将模块服务添加到依赖注入服务容器中</summary>
        /// <param name="services">依赖注入服务容器</param>
        /// <returns></returns>
        public override IServiceCollection AddServices(IServiceCollection services)
        {
            services.TryAddScoped<IOutStorManagerContract, OutStorManagerService>();

            return services;
        }

        /// <summary>
        /// 应用模块服务
        /// </summary>
        /// <param name="provider">服务提供者</param>
        public override void UsePack(IServiceProvider provider)
        {
            base.UsePack(provider);
        }
    }
}
