// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="cus-basedata.module.ts" company="teng.kun">
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
  selector: 'app-cus-basedata',
  templateUrl: './cus-basedata.component.html',
  styles: []
})
export class CusBasedataComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.moduleName = 'cusBasedata';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      {
        title: '操作', fixed: 'left', width: 65, buttons: [{
          text: '操作', children: [
            { text: '编辑', icon: 'edit', acl: 'Root.Admin.BaseModule.CusBasedata.Update', click: row => this.edit(row) },
            { text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.BaseModule.CusBasedata.Delete', click: row => this.delete(row) },
          ]
        }]
      },
      //{ title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      //{ title: '客户编码', index: 'CusId', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '名称', index: 'CusName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '联系方式', index: 'CusPhone', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '合作开始时间', index: 'CusComStartTime', sort: true, editable: true, filterable: true, type: 'date', ui: { grid: { span: 24 } }  },
      { title: '合作结束时间', index: 'CusComEndTime', sort: true, editable: true, filterable: true, type: 'date', ui: { grid: { span: 24 } } },
      { title: '合作状态', index: 'CusState', sort: true, editable: true, filterable: true, type: 'yn' },
      { title: '备注', index: 'CusRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
    ];
    return columns;
  }

  protected GetSFSchema(): SFSchema {
    let schema: SFSchema = {
      properties: this.ColumnsToSchemas(this.columns),
      required: ['CusId', 'CusName']
    };
    return schema;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $CusId: { grid: { span: 24 } },
      $CusName: { grid: { span: 24 } },
      $CusPhone: { grid: { span: 24 } },
      $CusRemark: { grid: { span: 24 } }
    };
    return ui;
  }
}

