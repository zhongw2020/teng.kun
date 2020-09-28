// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="mat-basedata.module.ts" company="teng.kun">
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
  selector: 'app-mat-basedata',
  templateUrl: './mat-basedata.component.html',
  styles: []
})
export class MatBasedataComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.moduleName = 'matBasedata';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      {
        title: '操作', fixed: 'left', width: 65, buttons: [{
          text: '操作', children: [
            { text: '编辑', icon: 'edit', acl: 'Root.Admin.BaseModule.MatBasedata.Update', click: row => this.edit(row) },
            { text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.BaseModule.MatBasedata.Delete', click: row => this.delete(row) },
          ]
        }]
      },
      { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '物品编码', index: 'MatId', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '物品名称', index: 'MatName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '物品规格', index: 'MatParameter', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '物品单位', index: 'MatUnit', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '安全库存', index: 'SafeStock', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '当前库存', index: 'CurrStock', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '最大库存', index: 'MaxStock', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '备注', index: 'MatRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '使用状态', index: 'MatState', sort: true, editable: true, filterable: true, type: 'yn' },
      { title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
    ];
    return columns;
  }

  protected GetSFSchema(): SFSchema {
    let schema: SFSchema = {
      properties: this.ColumnsToSchemas(this.columns),
      required: ['MatId', 'MatName', 'MatParameter', 'MatUnit', 'CurrStock', 'MatState']
    };
    return schema;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $MatId: { grid: { span: 24 } },
      $MatName: { grid: { span: 24 } },
      $MatParameter: { grid: { span: 24 } },
      $MatUnit: { grid: { span: 24 } },
      $MatRemark: { grid: { span: 24 } }
    };
    return ui;
  }
}

