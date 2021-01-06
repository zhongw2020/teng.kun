// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="leave-bp.module.ts" company="teng.kun">
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
  selector: 'app-leave-bp',
  templateUrl: './leave-verify.component.html',
  styles: []
})
export class LeaveVerifyComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.moduleName = 'leaveBp';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      //{
      //  title: '操作', fixed: 'left', width: 65, buttons: [{
      //    text: '操作', children: [
      //      { text: '审批', icon: 'edit', acl: 'Root.Admin.Bpm.LeaveBp.UpdateVerify', iif: row => row.BpState == '待审核',click: row => this.edit(row) },
      //      //{ text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.Bpm.LeaveBp.Delete', click: row => this.delete(row) },
      //    ]
      //  }]
      //},

      {
        title: '审批', fixed: 'left', width: 65, buttons: [{ text: '审批', icon: 'edit', acl: 'Root.Admin.Bpm.LeaveBp.UpdateVerify', iif: row => row.BpState == '待审核', click: row => this.edit(row) }]
      },

      //{ title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '流程编码', index: 'BpId', sort: { key: 'Id', default: "descend" },editable: true, filterable: true, ftype: 'string' },
      { title: '标题', index: 'BpTitle', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '状态', index: 'BpState', sort: true, editable: true, filterable: true, ftype: 'string', enum: ['待审核', '已通过', '已驳回', '已终止'], default: "待审核" },
      { title: '发起人', index: 'BpSponsor', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '上一节点', index: 'PrevNode', sort: true, editable: true, filterable: true, type: 'number' },
      //{ title: '当前节点', index: 'CurrNode', sort: true, editable: true, filterable: true, type: 'number' },
      //{ title: '下一节点', index: 'NextNode', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '请假开始时间', index: 'LeaveStartTime',readOnly: true, sort: true, editable: true, filterable: true, type: 'date' ,ui: { grid: { span: 24 } } },
      { title: '请假结束时间', index: 'LeaveEndTime', readOnly: true,sort: true, editable: true, filterable: true, type: 'date' ,ui: { grid: { span: 24 } } },
      { title: '请假原因', index: 'LeaveReason', readOnly: true, sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '备注', index: 'Remark', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'string' },
      { title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
    ];
    return columns;
  }

  protected GetSFSchema(): SFSchema {
    let schema: SFSchema = {
      properties: this.ColumnsToSchemas(this.columns),
      required: ['BpId', 'BpTitle']
    };
    return schema;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $BpId: { grid: { span: 24 } },
      $BpTitle: { grid: { span: 24 } },
      $BpState: { grid: { span: 24 } },
      $BpSponsor: { grid: { span: 24 } },
      $LeaveReason: { grid: { span: 24 } },
      $Remark: { grid: { span: 24 } }
    };
    return ui;
  }
}

