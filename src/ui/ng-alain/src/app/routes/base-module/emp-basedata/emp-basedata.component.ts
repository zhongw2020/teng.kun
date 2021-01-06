// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="emp-basedata.module.ts" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

import { Component, OnInit, Injector } from '@angular/core';
import { SFUISchema, SFSchema } from '@delon/form';
import { OsharpSTColumn } from '@shared/osharp/services/alain.types';
import { STComponentBase } from '@shared/osharp/components/st-component-base';
import { STData, XlsxService, STChange } from '@delon/abc';
import { STComponentBase2 } from '../../../shared/osharp/components/st-component-base2';

@Component({
  selector: 'app-emp-basedata',
  templateUrl: './emp-basedata.component.html',
  styles: []
})
export class EmpBasedataComponent extends STComponentBase2 implements OnInit {

  selectedRows: STData[] = [];

  constructor(injector: Injector, xlsx: XlsxService) {
    super(injector, xlsx);
    this.moduleName = 'empBasedata';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      {
        title: '操作', fixed: 'left', width: 65, buttons: [{
          text: '操作', children: [
            { text: '编辑', icon: 'edit', acl: 'Root.Admin.BaseModule.EmpBasedata.Update', click: row => this.edit(row) },
            { text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.BaseModule.EmpBasedata.Delete', click: row => this.delete(row) },
          ]
        }]
      },
     // { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
     // { title: '员工编码', index: 'EmpId', sort: true, editable: true, filterable: true, ftype: 'string' },
     
      { title: '姓名', index: 'EmpName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '部门', index: 'EmpDep', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '联系方式', index: 'EmpPhone', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '忙碌状态', index: 'EmpWorkState', sort: true, editable: true, filterable: true, type: 'yn' },
      { title: '在职状态', index: 'EmpFireState', sort: true, editable: true, filterable: true, type: 'yn' },
      { title: '入职时间', index: 'EmpWorkInTime', sort: true, editable: true, filterable: true, type: 'date' },
      //{ title: '离职时间', index: 'EmpWorkOutTime', sort: true, editable: false, filterable: true, type: 'date' },
      { title: '备注', index: 'EmpRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
    ];
    return columns;
  }

  protected GetSFSchema(): SFSchema {
    let schema: SFSchema = {
      properties: this.ColumnsToSchemas(this.columns),
      required: ['EmpId', 'EmpName']
    };
    return schema;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $EmpId: { grid: { span: 24 } },
      $EmpName: { grid: { span: 24 } },
      $EmpDep: { grid: { span: 24 } },
      $EmpPhone: { grid: { span: 24 } },
      $EmpRemark: { grid: { span: 24 } }
    };
    return ui;
  }

}
 


