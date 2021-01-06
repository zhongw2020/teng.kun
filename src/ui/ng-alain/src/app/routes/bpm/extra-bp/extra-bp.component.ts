// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="extra-bp.module.ts" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

import { Component, OnInit, Injector } from '@angular/core';
import { SFUISchema, SFSchema } from '@delon/form';
import { OsharpSTColumn } from '@shared/osharp/services/alain.types';
import { STComponentBase } from '@shared/osharp/components/st-component-base';
import { currentId } from 'async_hooks';
import { SettingsService } from '@delon/theme';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-extra-bp',
  templateUrl: './extra-bp.component.html',
  styles: []
})
export class ExtraBpComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector, public settings: SettingsService) {
    super(injector);
    this.moduleName = 'extraBp';
  }
  private createdate: any;
  protected datePipe: DatePipe = new DatePipe('en-US');
  ngOnInit() {
 

    super.InitBase();
   
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      {
        title: '操作', fixed: 'left', width: 65, buttons: [{
          text: '操作', children: [
            { text: '编辑', icon: 'edit', acl: 'Root.Admin.Bpm.ExtraBp.Update', iif: row => !(row.BpState == '已通过'), click: row => this.edit(row) },
            // { text: '终止', icon: 'delete', type: 'del', acl: 'Root.Admin.Bpm.ExtraBp.Update', click: row => this.delete(row) },
          ]
        }]
      },
      //{ title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '流程编码', index: 'BpId', readOnly: true, sort: { key: 'Id', default: "descend" }, editable: true, filterable: true, ftype: 'string',},
      { title: '标题', index: 'BpTitle', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '状态', index: 'BpState', sort: true, editable: true, filterable: true, ftype: 'string', enum: ['待审核', '已通过', '已驳回', '已终止'], default: "待审核" },
      { title: '发起人', index: 'BpSponsor', readOnly: true, sort: true, editable: true, filterable: true, ftype: 'string' },
      // { title: '上一节点', index: 'PrevNode', sort: true, readOnly: true, editable: true, filterable: true, type: 'number' },
      //{ title: '当前节点', index: 'CurrNode', sort: true, readOnly: true, editable: true, filterable: true, type: 'number' },
      //{ title: '下一节点', index: 'NextNode', sort: true, readOnly: true, editable: true, filterable: true, type: 'number' },
     
      { title: '加班开始时间', index: 'ExtraStartTime', sort: true, editable: true, filterable: true, type: 'date', disabled: true,ui: { grid: { span: 24 } } },
      { title: '加班结束时间', index: 'ExtraEndTime', sort: true, editable: true, filterable: true, type: 'date', ui: { grid: { span: 24 } } },
      { title: '加班原因', index: 'ExtraReason', sort: true, editable: true, filterable: true, ftype: 'string' },
     // { title: '备注', index: 'Remark', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
    ];
    return columns;
  }

  protected GetSFSchema(): SFSchema {
    let schema: SFSchema = {
      properties: this.ColumnsToSchemas(this.columns),
      required: ['BpId', 'BpTitle', 'ExtraStartTime','ExtraEndTime'],
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
      $Remark: { grid: { span: 24 } },
      $ExtraReason: { grid: { span: 24 } }
    };
    return ui;
  } 
 
  private outdate: any;
  create() {

    this.createdate = "JB" + this.datePipe.transform(new Date(), 'yyyyMMddHHmmssS');
    this.outdate = this.datePipe.transform(moment().subtract(5, 'days').toDate(), 'yyyy-MM-dd');

    this.schema = {
      properties: {
        BpId: {
          type: 'string',
          title: '流程编码',
          readOnly: true,
          default: this.createdate,
           ui: {
            visibleIf: { ExtraStartTime: (value: any) => value > this.outdate },
            grid: { span: 24 }

          }
        },
        BpTitle: {
          type: 'string',
          title: '标题',
          ui: {
            visibleIf: { ExtraStartTime: (value: any) => value > this.outdate },
            grid: { span: 24 }

          }
        },
        BpState: {
          type: 'string',
          title: '状态',
          enum: ['待审核', '已通过', '已驳回', '已终止'],
          readOnly: true,
          default: "待审核",
           ui: {
            visibleIf: { ExtraStartTime: (value: any) => value > this.outdate },
            grid: { span: 24 }

          }
        },
      
        BpSponsor: {
          type: 'string',
          title: '发起人',
          readOnly:true,
          default: this.settings.user.name,
          ui: {
            visibleIf: { ExtraStartTime: (value: any) => value > this.outdate },
            grid: { span: 24 }

          }
        },
        ExtraStartTime:
        {
          type: 'string',
          format:'date-time',
          title: '加班开始时间',
          description: '只能提起5天以内的加班流程:截止时间：' + this.outdate,
         
        },
        ExtraEndTime: {
          type: 'string',
          format: 'date-time',
          title: '加班结束时间',
          ui: {
            visibleIf: { ExtraStartTime: (value: any) => value > this.outdate },
            grid: { span: 24 }
            
          }

        },
        ExtraReason: {
          type: 'string',
          title: '加班原因',
          ui: {
            visibleIf: { ExtraStartTime: (value: any) => value > this.outdate },
            grid: { span: 24 }

          }
        },
      },
      required: ['BpId', 'BpTitle', 'ExtraStartTime', 'ExtraEndTime'],

    };

   


    this.editRow = {};
    this.editTitle = '新增';
    this.editModal.open();
  }
}

