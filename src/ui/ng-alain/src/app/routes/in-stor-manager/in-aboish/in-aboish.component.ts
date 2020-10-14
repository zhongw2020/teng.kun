// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="in-stor.module.ts" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

import { Component, OnInit, Injector } from '@angular/core';
import { SFUISchema, SFSchema } from '@delon/form';
import { OsharpSTColumn } from '@shared/osharp/services/alain.types';
import { STComponentBase } from '@shared/osharp/components/st-component-base';

@Component({
  selector: 'app-in-stor',
  templateUrl: './in-aboish.component.html',
  styles: []
})
export class InAbolishComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.moduleName = 'inStor';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      //{
      //  title: '操作', fixed: 'left', width: 65, buttons: [{
      //    text: '操作', children: [
      //      { text: '作废', icon: 'edit', acl: 'Root.Admin.InStorManager.InStor.UpdateAbolish', iif: row => !(row.Abolishflag || (!(row.InstorVerifyState == "已通过"))),click: row => this.edit(row) },
      //      //{ text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.InStorManager.InStor.Delete', click: row => this.delete(row) },
      //    ]
      //  }]
      //},

      {
        title: '作废', fixed: 'left', width: 65, buttons: [{ text: '作废', icon: 'edit', acl: 'Root.Admin.InStorManager.InStor.UpdateAbolish', iif: row => !(row.Abolishflag || (!(row.InstorVerifyState == "已通过"))), click: row => this.edit(row) }]
      },
      // { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '入库凭证号', index: 'InstorVoucher', readOnly: true, sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '物品名称', index: 'MatName', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'string', ui: { grid: { span: 24 } } },
      { title: '供应商名称', index: 'SupName', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'string', ui: { grid: { span: 24 } } },
      { title: '价格', index: 'InstorPrice', sort: true, readOnly: true, editable: true, filterable: true, type: 'number' },
      { title: '入库数量', index: 'InstorNum', sort: true, readOnly: true, editable: true, filterable: true, type: 'number' },
      { title: '反冲数量', index: 'RecoilNum', sort: true, readOnly: true, editable: true, filterable: true, type: 'number' },
      { title: '入库时间', index: 'InstorDate', sort: true, readOnly: true, editable: true, filterable: true, type: 'date', ui: { grid: { span: 24 } } },
      
      { title: '对账标记', index: 'ReconciliationRemark', sort: true, readOnly: true, editable: true, filterable: true, type: 'yn' },
      { title: '收票标记', index: 'SupTicketRemark', sort: true, readOnly: true, editable: true, filterable: true, type: 'yn' },
      { title: '结算标记', index: 'SupCloseAccuntsFlag', sort: true, readOnly: true, editable: true, filterable: true, type: 'yn' },
      //{ title: '入库操作员', index: 'InstorName', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '仓库名称', index: 'StorName', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '入库审核状态', index: 'InstorVerifyState', sort: true, editable: true, filterable: true, type: 'yn' },
      //{ title: '审核意见', index: 'VerifyOpinion', sort: true, editable: true, filterable: true, ftype: 'string' },

      //{ title: '备注', index: 'InstorRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
      
      { title: '反冲状态', index: 'RecoilState', sort: true, readOnly: true, editable: true, filterable: true, type: 'yn' },
      //{ title: '反冲日期', index: 'RecoilDate', sort: true, editable: true, filterable: true, type: 'date', ui: { grid: { span: 24 } } },
      //{ title: '反冲原因', index: 'RecoilReason', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '反冲操作员', index: 'RecoilEmpId', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '作废标记', index: 'Abolishflag', sort: true, editable: true, filterable: true, type: 'yn' },
      { title: '作废时间', index: 'AbolishDate', sort: true, editable: true, filterable: true, type: 'date', ui: { grid: { span: 24 } } },
      { title: '作废原因', index: 'AbolishReason', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '作废操作员', index: 'AbolishEmpId', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '结算标记时间', index: 'SupCloseAccuntsDate', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '结算标记操作员', index: 'SupCloseAccuntsEmpId', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '结算备注', index: 'SupCloseAccuntsRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
     // { title: '创建者', index: 'CreatorId', type: 'number' },
     // { title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
     // { title: '更新者', index: 'LastUpdaterId', type: 'number' },
     // { title: '更新时间', index: 'LastUpdatedTime', type: 'date' },
    ];
    return columns;
  }

  protected GetSFSchema(): SFSchema {
    let schema: SFSchema = {
      properties: this.ColumnsToSchemas(this.columns),
      required: ['InstorVoucher', 'MatId', 'SupId', 'InstorPrice', 'InstorNum', 'InstorName']
    };
    return schema;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $InstorVoucher: { grid: { span: 24 } },
      $MatId: { grid: { span: 24 } },
      $SupId: { grid: { span: 24 } },
      $InstorName: { grid: { span: 24 } },
      $StorName: { grid: { span: 24 } },
      $VerifyOpinion: { grid: { span: 24 } },
      $InstorRemark: { grid: { span: 24 } },
      $RecoilReason: { grid: { span: 24 } },
      $RecoilEmpId: { grid: { span: 24 } },
      $AbolishReason: { grid: { span: 24 } },
      $AbolishEmpId: { grid: { span: 24 } },
      $SupCloseAccuntsDate: { grid: { span: 24 } },
      $SupCloseAccuntsEmpId: { grid: { span: 24 } },
      $SupCloseAccuntsRemark: { grid: { span: 24 } }
    };
    return ui;
  }
}

