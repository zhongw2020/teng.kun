// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1. 横向扩展：如需给当前模块添加方法接口，可新建文件“IReportOutInContract.cs”的分部接口“public partial interface IReportOutInContract”添加方法，并添加相应新的分部基类 abstract partial class ReportOutInServiceBase 实现新方法
// </auto-generated>
//
//  <copyright file="IReportOutInContract.generated.cs" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

using OSharp.Data;
using OSharp.Extensions;

using teng.kun.ReportOutIn.Dtos;
using teng.kun.ReportOutIn.Entities;


namespace teng.kun.ReportOutIn
{
    /// <summary>
    /// 业务契约接口：报表信息模块
    /// </summary>
    public partial interface IReportOutInContract
    {
        #region 库存报表信息业务

        /// <summary>
        /// 获取 库存报表信息查询数据集
        /// </summary>
        IQueryable<ReportStore> ReportStores { get; }

        /// <summary>
        /// 检查库存报表信息信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的库存报表信息编号</param>
        /// <returns>库存报表信息是否存在</returns>
        Task<bool> CheckReportStoreExists(Expression<Func<ReportStore, bool>> predicate, int id = default(int));
        
        #endregion
        
        #region 出库报表信息业务

        /// <summary>
        /// 获取 出库报表信息查询数据集
        /// </summary>
        IQueryable<ReportOut> ReportOuts { get; }

        /// <summary>
        /// 检查出库报表信息信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的出库报表信息编号</param>
        /// <returns>出库报表信息是否存在</returns>
        Task<bool> CheckReportOutExists(Expression<Func<ReportOut, bool>> predicate, int id = default(int));
        
        #endregion
        
        #region 入库报表信息业务

        /// <summary>
        /// 获取 入库报表信息查询数据集
        /// </summary>
        IQueryable<ReportIn> ReportIns { get; }

        /// <summary>
        /// 检查入库报表信息信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的入库报表信息编号</param>
        /// <returns>入库报表信息是否存在</returns>
        Task<bool> CheckReportInExists(Expression<Func<ReportIn, bool>> predicate, int id = default(int));
        
        #endregion
        
    }
}
