//------------------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类：可遵守如下规则进行扩展：
//      1.横向扩展：如需添加额外的属性，可新建文件“ReportOut.cs”的分部类“public partial class ReportOut”}添加属性
// </auto-generated>
//
//  <copyright file="ReportOut.generated.cs" company="teng.kun">
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


namespace teng.kun.ReportOutIn.Entities
{
    /// <summary>
    /// 实体类：出库报表信息
    /// </summary>
    [Description("出库报表信息")]
    [TableNamePrefix("ReportOutIn")]
    public partial class ReportOut : EntityBase<int>
    {
        /// <summary>
        /// 获取或设置 出库凭证号
        /// </summary>
        [DisplayName("出库凭证号")]
        public string OutstorVoucher { get; set; }

        /// <summary>
        /// 获取或设置 入库凭证号
        /// </summary>
        [DisplayName("入库凭证号")]
        public string InstorVoucher { get; set; }

        /// <summary>
        /// 获取或设置 物料名称
        /// </summary>
        [DisplayName("物料名称")]
        public string MatName { get; set; }

        /// <summary>
        /// 获取或设置 入库价格
        /// </summary>
        [DisplayName("入库价格")]
        public double InstorPrice { get; set; }

        /// <summary>
        /// 获取或设置 出库价格
        /// </summary>
        [DisplayName("出库价格")]
        public double OutstorPrice { get; set; }

        /// <summary>
        /// 获取或设置 出库数量
        /// </summary>
        [DisplayName("出库数量")]
        public double OutstorNum { get; set; }

        /// <summary>
        /// 获取或设置 反冲数量
        /// </summary>
        [DisplayName("反冲数量")]
        public double RecoilNum { get; set; }

        /// <summary>
        /// 获取或设置 客户名称
        /// </summary>
        [DisplayName("客户名称")]
        public string CusName { get; set; }

        /// <summary>
        /// 获取或设置 客户结算
        /// </summary>
        [DisplayName("客户结算")]
        public bool CusjiesuanAccuntsFlag { get; set; }

        /// <summary>
        /// 获取或设置 业务员
        /// </summary>
        [DisplayName("业务员")]
        public string OutEmpName { get; set; }

        /// <summary>
        /// 获取或设置 出库日期
        /// </summary>
        [DisplayName("出库日期")]
        public DateTime OutstorDate { get; set; }

        /// <summary>
        /// 获取或设置 单据类型
        /// </summary>
        [DisplayName("单据类型")]
        public string OutstorCategory { get; set; }

        /// <summary>
        /// 获取或设置 备注
        /// </summary>
        [DisplayName("备注")]
        public string OutstorRemark { get; set; }

    }
}
