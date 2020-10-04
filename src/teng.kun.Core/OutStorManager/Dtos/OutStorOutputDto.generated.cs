// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类：可遵守如下规则进行扩展：
//      1.横向扩展：如需添加额外的属性，可新建文件“OutStorOutputDto.cs”的分部类“public partial class OutStorOutputDto”}添加属性
// </auto-generated>
//
//  <copyright file="OutStorOutputDto.generated.cs" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

using OSharp.Entity;
using OSharp.Mapping;

using teng.kun.OutStorManager.Entities;

namespace teng.kun.OutStorManager.Dtos
{
    /// <summary>
    /// 输入DTO：出库信息
    /// </summary>
    [MapFrom(typeof(OutStor))]
    [Description("出库信息")]
    public partial class OutStorOutputDto : IOutputDto
    {
        /// <summary>
        /// 初始化一个<see cref="OutStorOutputDto"/>类型的新实例
        /// </summary>
        public OutStorOutputDto()
        { }

        /// <summary>
        /// 初始化一个<see cref="OutStorOutputDto"/>类型的新实例
        /// </summary>
        public OutStorOutputDto(OutStor entity)
        {
            Id = entity.Id;
            OutstorVoucher = entity.OutstorVoucher;
            OutstorComName = entity.OutstorComName;
            CusId = entity.CusId;
            MatId = entity.MatId;
            SupId = entity.SupId;
            OutstorPrice = entity.OutstorPrice;
            OutstorDate = entity.OutstorDate;
            OutstorNum = entity.OutstorNum;
            OutEmpId = entity.OutEmpId;
            CusCloseAccuntsFlag = entity.CusCloseAccuntsFlag;
            CusCloseAccuntsEmpId = entity.CusCloseAccuntsEmpId;
            CusCloseAccuntsRemark = entity.CusCloseAccuntsRemark;
            Abolishflag = entity.Abolishflag;
            AbolishDate = entity.AbolishDate;
            AbolishReason = entity.AbolishReason;
            RecoilState = entity.RecoilState;
            RecoilDate = entity.RecoilDate;
            RecoilReason = entity.RecoilReason;
            PrintState = entity.PrintState;
            PrintMoName = entity.PrintMoName;
            OutstorRemark = entity.OutstorRemark;
            CreatorId = entity.CreatorId;
            CreatedTime = entity.CreatedTime;
            LastUpdaterId = entity.LastUpdaterId;
            LastUpdatedTime = entity.LastUpdatedTime;
        }

        /// <summary>
        /// 获取或设置 编号
        /// </summary>
        [DisplayName("编号")]
        public int Id { get; set; }

        /// <summary>
        /// 获取或设置 出库凭证号
        /// </summary>
        [DisplayName("出库凭证号")]
        public string OutstorVoucher { get; set; }

        /// <summary>
        /// 获取或设置 所属公司
        /// </summary>
        [DisplayName("所属公司")]
        public string OutstorComName { get; set; }

        /// <summary>
        /// 获取或设置 客户编码
        /// </summary>
        [DisplayName("客户编码")]
        public int CusId { get; set; }

        /// <summary>
        /// 获取或设置 物品编码
        /// </summary>
        [DisplayName("物品编码")]
        public int MatId { get; set; }

        /// <summary>
        /// 获取或设置 供应商编码
        /// </summary>
        [DisplayName("供应商编码")]
        public int SupId { get; set; }

        /// <summary>
        /// 获取或设置 单价
        /// </summary>
        [DisplayName("单价")]
        public double OutstorPrice { get; set; }

        /// <summary>
        /// 获取或设置 出库时间
        /// </summary>
        [DisplayName("出库时间")]
        public DateTime OutstorDate { get; set; }

        /// <summary>
        /// 获取或设置 数量
        /// </summary>
        [DisplayName("数量")]
        public double OutstorNum { get; set; }

        /// <summary>
        /// 获取或设置 派单人
        /// </summary>
        [DisplayName("派单人")]
        public int OutEmpId { get; set; }

        /// <summary>
        /// 获取或设置 客户结算标记
        /// </summary>
        [DisplayName("客户结算标记")]
        public string CusCloseAccuntsFlag { get; set; }

        /// <summary>
        /// 获取或设置 结算标记人
        /// </summary>
        [DisplayName("结算标记人")]
        public int CusCloseAccuntsEmpId { get; set; }

        /// <summary>
        /// 获取或设置 结算说明
        /// </summary>
        [DisplayName("结算说明")]
        public string CusCloseAccuntsRemark { get; set; }

        /// <summary>
        /// 获取或设置 作废标记
        /// </summary>
        [DisplayName("作废标记")]
        public bool Abolishflag { get; set; }

        /// <summary>
        /// 获取或设置 作废日期
        /// </summary>
        [DisplayName("作废日期")]
        public DateTime AbolishDate { get; set; }

        /// <summary>
        /// 获取或设置 作废原因
        /// </summary>
        [DisplayName("作废原因")]
        public string AbolishReason { get; set; }

        /// <summary>
        /// 获取或设置 反冲状态
        /// </summary>
        [DisplayName("反冲状态")]
        public bool RecoilState { get; set; }

        /// <summary>
        /// 获取或设置 反冲日期
        /// </summary>
        [DisplayName("反冲日期")]
        public DateTime RecoilDate { get; set; }

        /// <summary>
        /// 获取或设置 反冲原因
        /// </summary>
        [DisplayName("反冲原因")]
        public string RecoilReason { get; set; }

        /// <summary>
        /// 获取或设置 打印状态
        /// </summary>
        [DisplayName("打印状态")]
        public bool PrintState { get; set; }

        /// <summary>
        /// 获取或设置 打印模板名称
        /// </summary>
        [DisplayName("打印模板名称")]
        public string PrintMoName { get; set; }

        /// <summary>
        /// 获取或设置 备注
        /// </summary>
        [DisplayName("备注")]
        public string OutstorRemark { get; set; }

        /// <summary>
        /// 获取或设置 创建者
        /// </summary>
        [DisplayName("创建者")]
        public int? CreatorId { get; set; }

        /// <summary>
        /// 获取或设置 创建时间
        /// </summary>
        [DisplayName("创建时间")]
        public DateTime CreatedTime { get; set; }

        /// <summary>
        /// 获取或设置 更新者
        /// </summary>
        [DisplayName("更新者")]
        public int? LastUpdaterId { get; set; }

        /// <summary>
        /// 获取或设置 更新时间
        /// </summary>
        [DisplayName("更新时间")]
        public DateTime? LastUpdatedTime { get; set; }

    }
}
