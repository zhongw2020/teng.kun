// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1.横向扩展：如需给当前实体 OutStor 添加方法，可新建文件“OutStorManagerServiceBase.OutStor.cs”的分部类“public abstract partial class OutStorManagerServiceBase”添加功能
//      2.纵向扩展：如需要重写当前实体 OutStor 的业务实现，可新建文件“OutStorManagerService.OutStor.cs”的分部类“public partial class OutStorManagerService”对现有方法进行方法重写实现
// </auto-generated>
//
//  <copyright file="OutStorManagerServiceBase.OutStor.generated.cs" company="teng.kun">
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
using teng.kun.BaseModule.Entities;
using teng.kun.OutStorManager.Dtos;
using teng.kun.OutStorManager.Entities;


namespace teng.kun.OutStorManager
{
    public abstract partial class OutStorManagerServiceBase
    {
        /// <summary>
        /// 获取 出库信息查询数据集
        /// </summary>
        public IQueryable<OutStor> OutStors
        {
            get { return OutStorRepository.QueryAsNoTracking(); }
        }

        /// <summary>
        /// 检查出库信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的出库信息编号</param>
        /// <returns>出库信息是否存在</returns>
        public virtual Task<bool> CheckOutStorExists(Expression<Func<OutStor, bool>> predicate, int id = default(int))
        {
            return OutStorRepository.CheckExistsAsync(predicate, id);
        }
        
        /// <summary>
        /// 添加出库信息
        /// </summary>
        /// <param name="dtos">要添加的出库信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        public virtual async Task<OperationResult> CreateOutStors(params OutStorInputDto[] dtos)
        {
            Check.Validate<OutStorInputDto, int>(dtos, nameof(dtos));

            //通过ID获取Name

            MatBasedata matdb = await MatBasedataRepository.GetAsync(dtos[0].MatId);
            SupBasedata supdb = await SupBasedataRepository.GetAsync(dtos[0].SupId);
            CusBasedata cusdb = await CusBasedataRepository.GetAsync(dtos[0].CusId);
            EmpBasedata empdb = await EmpBasedataRepository.GetAsync(dtos[0].OutEmpId);

            dtos[0].MatName = matdb.MatName;
            dtos[0].SupName = supdb.SupName;
            dtos[0].CusName = cusdb.CusName;
            dtos[0].OutEmpName = empdb.EmpName;

            //修改人员工作状态

            empdb.EmpWorkState = true;
            EmpBasedataRepository.Update(empdb);

            return await OutStorRepository.InsertAsync(dtos);
        }
        
        /// <summary>
        /// 更新出库信息
        /// </summary>
        /// <param name="dtos">包含更新信息的出库信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> UpdateOutStors(params OutStorInputDto[] dtos)
        {
            Check.Validate<OutStorInputDto, int>(dtos, nameof(dtos));
            return OutStorRepository.UpdateAsync(dtos);
        }
        
        /// <summary>
        /// 删除出库信息
        /// </summary>
        /// <param name="ids">要删除的出库信息编号</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> DeleteOutStors(params int[] ids)
        {
            Check.NotNull(ids, nameof(ids));
            return OutStorRepository.DeleteAsync(ids);
        }
    }
}
