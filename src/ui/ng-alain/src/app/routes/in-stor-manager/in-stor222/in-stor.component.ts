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
import { STData } from '@delon/abc';

@Component({
  selector: 'app-in-stor',
  templateUrl: './in-stor.component.html',
  styles: []
})
export class InStorComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.moduleName = 'inStor';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      {
        title: '操作', fixed: 'left', width: 65, buttons: [{
          text: '操作', children: [
            { text: '编辑', icon: 'edit', acl: 'Root.Admin.InStorManager.InStor.Update', iif: row => row.InstorVerifyState=='待审核', click: row => this.edit(row) },
            { text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.InStorManager.InStor.Delete', click: row => this.delete(row) },
            { text: '查看', icon: 'flag', type: 'static', acl: 'Root.Admin.InStorManager.InStor.Read', click: row => this.read(row) },
          ]
        }]
      },
      { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '入库凭证号', index: 'InstorVoucher', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '物品编码', index: 'MatId', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '供应商编码', index: 'SupId', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '价格', index: 'InstorPrice', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '数量', index: 'InstorNum', sort: true, editable: true, filterable: true, type: 'number' },
      //{ title: '入库时间', index: 'InstorDate', sort: true, editable: true, filterable: true, type: 'date' },
      //{ title: '作废标记', index: 'Abolishflag', sort: true, editable: true, filterable: true, type: 'yn' },
      { title: '入库操作员', index: 'InstorName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '仓库名称', index: 'StorName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '入库审核状态', index: 'InstorVerifyState', sort: true, editable: true, filterable: true, ftype: "string", enum: ['待审核'], default: '待审核',},
      //{ title: '审核意见', index: 'VerifyOpinion', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '反冲状态', index: 'RecoilState', sort: true, editable: true, readOnly: true, filterable: true, type: 'yn' },
      { title: '备注', index: 'InstorRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '反冲日期', index: 'RecoilDate', sort: true, editable: true, filterable: true, type: 'date' },
      //{ title: '反冲原因', index: 'RecoilReason', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '反冲操作员', index: 'RecoilEmpId', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '作废时间', index: 'AbolishDate', sort: true, editable: true, filterable: true, type: 'date' },
      //{ title: '作废原因', index: 'AbolishReason', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '作废操作员', index: 'AbolishEmpId', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '结算标记时间', index: 'SupCloseAccuntsDate', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '结算标记操作员', index: 'SupCloseAccuntsEmpId', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '结算备注', index: 'SupCloseAccuntsRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '创建者', index: 'CreatorId', type: 'number' },
      { title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
      { title: '更新者', index: 'LastUpdaterId', type: 'number' },
      { title: '更新时间', index: 'LastUpdatedTime', type: 'date' },
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

  read(value: STData)
  {
    if (!value || !this.editModal) return;
    this.schema = {
      properties: {
          Id:{ title: '编号',   readOnly: true,   type: 'number' },
        InstorVoucher: { title: '入库凭证号', readOnly: true,  type: 'string' },
        MatId: { title: '物品编码', readOnly: true,  type: 'string' },
        SupId: { title: '供应商编码', readOnly: true,  type: 'string' },
        InstorPrice: { title: '价格', readOnly: true,  type: 'number' },
        InstorNum: { title: '数量', readOnly: true, type: 'number' },
      },
     
    };
    this.ui = this.GetSFUISchema();
    this.editRow = value;
    this.editTitle = "查看";
    this.editModal.open();
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

