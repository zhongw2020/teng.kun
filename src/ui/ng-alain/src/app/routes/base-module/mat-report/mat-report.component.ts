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

import { Component, OnInit, Injector, Host } from '@angular/core';
import { SFUISchema, SFSchema } from '@delon/form';
import { OsharpSTColumn } from '@shared/osharp/services/alain.types';
import { STComponentBaseMatreport } from '@shared/osharp/components/st-component-base-matreport';
import { STColumnBadge, STData, XlsxService } from '@delon/abc';

@Component({
  selector: 'app-mat-report',
  templateUrl: './mat-report.component.html',

})



export class MatReportComponent extends STComponentBaseMatreport implements OnInit {

  constructor(injector: Injector, xlsx: XlsxService) {
    super(injector, xlsx);
    this.moduleName = 'matBasedata';
  }

  ngOnInit() {
    super.InitBase();

  }

  ngAfterViewInit() {


  }

  setRowColor(record: STData, index: number) {
    if (record.CurrStock < record.SafeStock) {
      return 'sign-tr';
    }
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
      //{ title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      //{ title: '物品编码', index: 'MatId', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '入库物品', index: 'MatName', sort: true, editable: true, filterable: true, ftype: 'string',  },
      { title: '腾坤别名', index: 'MatAlias01', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '华业别名', index: 'MatAlias02', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '效信通别名', index: 'MatAlias03', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '帅坤别名', index: 'MatAlias04', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '备用别名', index: 'MatAlias05', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '物品单位', index: 'MatUnit', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '安全库存', index: 'SafeStock', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '当前库存', index: 'CurrStock', sort: true, editable: true, filterable: true, type: 'number', },
      { title: '最大库存', index: 'MaxStock', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '备注', index: 'MatRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '库存统计', index: 'MatState', sort: true, editable: true, filterable: true, type: 'yn' },
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

