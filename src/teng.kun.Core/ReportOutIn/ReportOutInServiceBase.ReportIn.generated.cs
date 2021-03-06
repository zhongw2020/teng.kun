// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1.横向扩展：如需给当前实体 ReportIn 添加方法，可新建文件“ReportOutInServiceBase.ReportIn.cs”的分部类“public abstract partial class ReportOutInServiceBase”添加功能
//      2.纵向扩展：如需要重写当前实体 ReportIn 的业务实现，可新建文件“ReportOutInService.ReportIn.cs”的分部类“public partial class ReportOutInService”对现有方法进行方法重写实现
// </auto-generated>
//
//  <copyright file="ReportOutInServiceBase.ReportIn.generated.cs" company="teng.kun">
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
using OSharp.Dependency;
using OSharp.Extensions;
using OSharp.Mapping;

using teng.kun.ReportOutIn.Dtos;
using teng.kun.ReportOutIn.Entities;


namespace teng.kun.ReportOutIn
{
    public abstract partial class ReportOutInServiceBase
    {
        /// <summary>
        /// 获取 入库报表信息查询数据集
        /// </summary>
        public IQueryable<ReportIn> ReportIns
        {
            get { return ReportInRepository.QueryAsNoTracking(); }
        }

        /// <summary>
        /// 检查入库报表信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的入库报表信息编号</param>
        /// <returns>入库报表信息是否存在</returns>
        public virtual Task<bool> CheckReportInExists(Expression<Func<ReportIn, bool>> predicate, int id = default(int))
        {
            return ReportInRepository.CheckExistsAsync(predicate, id);
        }
    }
}
