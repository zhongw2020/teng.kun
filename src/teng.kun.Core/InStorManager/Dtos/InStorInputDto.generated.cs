// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类：可遵守如下规则进行扩展：
//      1.横向扩展：如需添加额外的属性，可新建文件“InStorInputDto.cs”的分部类“public partial class InStorInputDto”}添加属性
// </auto-generated>
//
//  <copyright file="InStorInputDto.generated.cs" company="teng.kun">
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

using teng.kun.InStorManager.Entities;


namespace teng.kun.InStorManager.Dtos
{
    /// <summary>
    /// 输入DTO：入库信息
    /// </summary>
    [MapTo(typeof(InStor))]
    [Description("入库信息")]
    public partial class InStorInputDto : IInputDto<int>
    {
        /// <summary>
        /// 获取或设置 编号
        /// </summary>
        [DisplayName("编号")]
        public int Id { get; set; }

        /// <summary>
        /// 获取或设置 入库凭证号
        /// </summary>
        [DisplayName("入库凭证号"), Required]
        public string InstorVoucher { get; set; }

        /// <summary>
        /// 获取或设置 物品编码
        /// </summary>
        [DisplayName("物品编码"), Required]
        public int MatId { get; set; }

        /// <summary>
        /// 获取或设置 供应商编码
        /// </summary>
        [DisplayName("供应商编码"), Required]
        public int SupId { get; set; }



        /// <summary>
        /// 获取或设置 物品名称
        /// </summary>
        [DisplayName("物品名称")]
        public string MatName { get; set; }

        /// <summary>
        /// 获取或设置 供应商名称
        /// </summary>
        [DisplayName("供应商名称")]
        public string SupName { get; set; }

        /// <summary>
        /// 获取或设置 价格
        /// </summary>
        [DisplayName("价格")]
        public double InstorPrice { get; set; }

        /// <summary>
        /// 获取或设置 数量
        /// </summary>
        [DisplayName("数量")]
        public double InstorNum { get; set; }

        /// <summary>
        /// 获取或设置 入库时间
        /// </summary>
        [DisplayName("入库时间")]
        public DateTime InstorDate { get; set; }

        /// <summary>
        /// 获取或设置 作废标记
        /// </summary>
        [DisplayName("作废标记")]
        public bool Abolishflag { get; set; }

        /// <summary>
        /// 获取或设置 入库操作员
        /// </summary>
        [DisplayName("入库操作员"), Required]
        public string InstorName { get; set; }

        /// <summary>
        /// 获取或设置 仓库名称
        /// </summary>
        [DisplayName("仓库名称")]
        public string StorName { get; set; }

        /// <summary>
        /// 获取或设置 入库审核状态
        /// </summary>
        [DisplayName("入库审核状态")]
        public string InstorVerifyState { get; set; }

        /// <summary>
        /// 获取或设置 审核意见
        /// </summary>
        [DisplayName("审核意见")]
        public string VerifyOpinion { get; set; }

        /// <summary>
        /// 获取或设置 反冲状态
        /// </summary>
        [DisplayName("反冲状态")]
        public bool RecoilState { get; set; }

        /// <summary>
        /// 获取或设置 反冲数量
        /// </summary>
        [DisplayName("反冲数量")]
        public Double RecoilNum { get; set; }

        /// <summary>
        /// 获取或设置 备注
        /// </summary>
        [DisplayName("备注")]
        public string InstorRemark { get; set; }

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
        /// 获取或设置 反冲操作员
        /// </summary>
        [DisplayName("反冲操作员")]
        public string RecoilEmpId { get; set; }

        /// <summary>
        /// 获取或设置 作废时间
        /// </summary>
        [DisplayName("作废时间")]
        public DateTime AbolishDate { get; set; }

        /// <summary>
        /// 获取或设置 作废原因
        /// </summary>
        [DisplayName("作废原因")]
        public string AbolishReason { get; set; }

        /// <summary>
        /// 获取或设置 作废操作员
        /// </summary>
        [DisplayName("作废操作员")]
        public string AbolishEmpId { get; set; }

        /// <summary>
        /// 获取或设置 结算标记
        /// </summary>
        [DisplayName("结算标记")]
        public bool SupCloseAccuntsFlag { get; set; }
        /// <summary>
        /// 获取或设置 结算标记时间
        /// </summary>
        [DisplayName("结算标记时间")]
        public string SupCloseAccuntsDate { get; set; }

        /// <summary>
        /// 获取或设置 结算标记操作员
        /// </summary>
        [DisplayName("结算标记操作员")]
        public string SupCloseAccuntsEmpId { get; set; }

        /// <summary>
        /// 获取或设置 结算备注
        /// </summary>
        [DisplayName("结算备注")]
        public string SupCloseAccuntsRemark { get; set; }

    }
}
