// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1.横向扩展：如需给当前实体 SupBasedata 添加方法，可新建文件“BaseModuleServiceBase.SupBasedata.cs”的分部类“public abstract partial class BaseModuleServiceBase”添加功能
//      2.纵向扩展：如需要重写当前实体 SupBasedata 的业务实现，可新建文件“BaseModuleService.SupBasedata.cs”的分部类“public partial class BaseModuleService”对现有方法进行方法重写实现
// </auto-generated>
//
//  <copyright file="BaseModuleServiceBase.SupBasedata.generated.cs" company="teng.kun">
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

using teng.kun.BaseModule.Dtos;
using teng.kun.BaseModule.Entities;


namespace teng.kun.BaseModule
{
    public abstract partial class BaseModuleServiceBase
    {
        /// <summary>
        /// 获取 供应商基础数据信息查询数据集
        /// </summary>
        public IQueryable<SupBasedata> SupBasedatas
        {
            get { return SupBasedataRepository.QueryAsNoTracking(); }
        }

        /// <summary>
        /// 检查供应商基础数据信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的供应商基础数据信息编号</param>
        /// <returns>供应商基础数据信息是否存在</returns>
        public virtual Task<bool> CheckSupBasedataExists(Expression<Func<SupBasedata, bool>> predicate, int id = default(int))
        {
            return SupBasedataRepository.CheckExistsAsync(predicate, id);
        }
        
        /// <summary>
        /// 添加供应商基础数据信息
        /// </summary>
        /// <param name="dtos">要添加的供应商基础数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> CreateSupBasedatas(params SupBasedataInputDto[] dtos)
        {
            Check.Validate<SupBasedataInputDto, int>(dtos, nameof(dtos));
            return SupBasedataRepository.InsertAsync(dtos);
        }
        
        /// <summary>
        /// 更新供应商基础数据信息
        /// </summary>
        /// <param name="dtos">包含更新信息的供应商基础数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> UpdateSupBasedatas(params SupBasedataInputDto[] dtos)
        {
            Check.Validate<SupBasedataInputDto, int>(dtos, nameof(dtos));
            return SupBasedataRepository.UpdateAsync(dtos);
        }
        
        /// <summary>
        /// 删除供应商基础数据信息
        /// </summary>
        /// <param name="ids">要删除的供应商基础数据信息编号</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> DeleteSupBasedatas(params int[] ids)
        {
            Check.NotNull(ids, nameof(ids));
            return SupBasedataRepository.DeleteAsync(ids);
        }
    }
}
