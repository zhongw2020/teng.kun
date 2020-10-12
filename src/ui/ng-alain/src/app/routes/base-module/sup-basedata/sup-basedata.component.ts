// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="sup-basedata.module.ts" company="teng.kun">
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
  selector: 'app-sup-basedata',
  templateUrl: './sup-basedata.component.html',
  styles: []
})
export class SupBasedataComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.moduleName = 'supBasedata';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      {
        title: '操作', fixed: 'left', width: 65, buttons: [{
          text: '操作', children: [
            { text: '编辑', icon: 'edit', acl: 'Root.Admin.BaseModule.SupBasedata.Update', click: row => this.edit(row) },
            { text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.BaseModule.SupBasedata.Delete', click: row => this.delete(row) },
          ]
        }]
      },
    //{ title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      
      { title: '名称', index: 'SupName', sort: true, editable: true, filterable: true, ftype: 'string' },
     // { title: '供应商编码', index: 'SupId', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '联系方式', index: 'SupPhone', sort: true, editable: true, filterable: true, ftype: 'string'},
      { title: '开始合作时间', index: 'SupComStartTime', sort: true, editable: true, filterable: true, type: 'date', ui: { grid: { span: 24 } } },
      { title: '结束合作时间', index: 'SupComEndTime', sort: true, editable: true, filterable: true, type: 'date', ui: { grid: { span: 24 } }  },
      { title: '合作状态', index: 'SupState', sort: true, editable: true, filterable: true, type: 'yn' },
      { title: '备注', index: 'SupRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
    //{ title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
    ];
    return columns;
  }

  protected GetSFSchema(): SFSchema {
    let schema: SFSchema = {
      properties: this.ColumnsToSchemas(this.columns),
      required: ['SupName', 'SupId']
    };
    return schema;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $SupPhone: { grid: { span: 24 } },
      $SupName: { grid: { span: 24 } },
      $SupId: { grid: { span: 24 } },
      $SupRemark: { grid: { span: 24 } }
    };
    return ui;
  }
}

