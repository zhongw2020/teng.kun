// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="out-stor.module.ts" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

import { Component, OnInit, Injector, ChangeDetectorRef } from '@angular/core';
import { SFUISchema, SFSchema } from '@delon/form';
import { OsharpSTColumn } from '@shared/osharp/services/alain.types';
import { STComponentBase } from '@shared/osharp/components/st-component-base';
import { XlsxService, STData, STChange } from '@delon/abc';
import { AjaxResult } from '../../../shared/osharp/osharp.model';

@Component({
  selector: 'app-out-stor',
  templateUrl: './out-jiesuan.component.html',
  styles: []
})
export class OutJiesuanComponent extends STComponentBase implements OnInit {

  selectedRows: STData[] = [];
  totalCallNo = 0;
  constructor(injector: Injector, xlsx: XlsxService, private cdr: ChangeDetectorRef,) {
    super(injector);
    this.moduleName = 'outStor';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      { title: '', index: 'key', type: 'checkbox' },
      {
        title: '结算', fixed: 'left', width: 65, buttons: [{ text: '结算', icon: 'edit', acl: 'Root.Admin.OutStorManager.OutStor.Updatejiesuan', iif: row => !(row.Abolishflag || row.CusjiesuanAccuntsFlag) && row.PrintState && (row.RecoilNum < row.OutstorNum) && row.CusCloseAccuntsFlag, click: row => this.edit(row) }]
      },


      // { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      
      { title: '单据类型', index: 'OutstorCategory', readOnly: true, sort: true, editable: true, filterable: true, ftype: 'string' },

      { title: '出库凭证号', index: 'OutstorVoucher', readOnly: true, sort: { key: 'Id', default: "descend" }, editable: true, filterable: true, ftype: 'string' },
      { title: '出账公司', index: 'OutstorComName', readOnly: true, sort: true, editable: true, filterable: true, ftype: 'string', enum: ['腾坤', '华业', '效信通', '帅坤'] },
      {
        title: '客户名称', index: 'CusName', readOnly: true, sort: true, editable: true, filterable: true, ftype: 'string', ui: { grid: { span: 24 } }
      },
      { title: '物品名称', index: 'MatName', readOnly: true, sort: true, editable: true, filterable: true, ftype: 'string', ui: { grid: { span: 24 } } },
     // { title: '供应商名称', index: 'SupName', readOnly: true, sort: true, editable: true, filterable: true, ftype: 'string', ui: { grid: { span: 24 } } },
      { title: '出库时间', index: 'OutstorDate', readOnly: true, sort: true, editable: true, filterable: true, type: 'date', ui: { grid: { span: 24 } } },
      { title: '单价', index: 'OutstorPrice', readOnly: true, sort: true, editable: true, filterable: true, type: 'number' },

      {
        title: '数量', index: 'OutstorNum', readOnly: true, sort: true, editable: true, filterable: true, type: 'number', key: 'OutstorNum'
      },
      { title: '反冲数量', index: 'RecoilNum', readOnly: true, sort: true, editable: true, filterable: true, type: 'number', },
     // { title: '作废标记', index: 'Abolishflag', readOnly: true, sort: true, editable: true, filterable: true, type: 'yn', default: '0' },
      { title: '业务员', index: 'OutEmpName', readOnly: true,sort: true, editable: true, filterable: true, ftype: 'string'},

      // { title: '打印状态', index: 'PrintState', sort: true, editable: true, filterable: true, type: 'yn' },
      { title: '签回标记', index: 'CusCloseAccuntsFlag', sort: true, editable: true, filterable: true, type: 'yn', default: '0' },
      { title: '结算标记', index: 'CusjiesuanAccuntsFlag', sort: true, editable: true, filterable: true, type: 'yn', default: '0' },

      

       //  { title: '签回人员', index: 'CusCloseAccuntsEmpId', sort: true, editable: true, filterable: true, type: 'radio', enum: ['员工A', '员工B', '员工C'] },
      // { title: '签回说明', index: 'CusCloseAccuntsRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
     
      //{ title: '作废日期', index: 'AbolishDate', sort: true, editable: true, filterable: true, type: 'date' },
      //{ title: '作废原因', index: 'AbolishReason', sort: true, editable: true, filterable: true, ftype: 'string' },
    
      //{ title: '反冲状态', index: 'RecoilState', sort: true, editable: true, filterable: true, type: 'yn' },
      //{ title: '反冲日期', index: 'RecoilDate', sort: true, editable: true, filterable: true, type: 'date', ui: { grid: { span: 24 } } },
      //{ title: '反冲原因', index: 'RecoilReason', sort: true, editable: true, filterable: true, ftype: 'string' },

      //{ title: '打印模板名称', index: 'PrintMoName', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'string', enum: ['腾坤', '华业', '效信通', '帅坤'] },
      { title: '备注', index: 'OutstorRemark', readOnly:true, sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '创建者', index: 'CreatorId', type: 'number' },
      //{ title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
      //{ title: '更新者', index: 'LastUpdaterId', type: 'number' },
      //{ title: '更新时间', index: 'LastUpdatedTime', type: 'date' },
    ];
    return columns;
  }

  protected GetSFSchema(): SFSchema {
    let schema: SFSchema = {
      properties: this.ColumnsToSchemas(this.columns),
      required: ['OutstorVoucher', 'OutstorComName', 'CusId', 'MatId', 'SupId', 'OutstorPrice', 'OutstorNum']
    };
    return schema;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $OutstorVoucher: { grid: { span: 24 } },
      $OutstorComName: { grid: { span: 24 } },
      $CusId: { grid: { span: 24 } },
      $MatId: { grid: { span: 24 } },
      $SupId: { grid: { span: 24 } },
      $OutEmpId: { grid: { span: 24 } },
      $CusCloseAccuntsFlag: { grid: { span: 24 } },
      $CusCloseAccuntsEmpId: { grid: { span: 24 } },
      $CusCloseAccuntsRemark: { grid: { span: 24 } },
      $AbolishReason: { grid: { span: 24 } },
      $RecoilReason: { grid: { span: 24 } },
      $PrintMoName: { grid: { span: 24 } },
      $OutstorRemark: { grid: { span: 24 } }
    };
    return ui;
  }

  change(e: STChange) {
    switch (e.type) {
      case 'checkbox':
        this.selectedRows = e.checkbox!;
        this.totalCallNo = this.selectedRows.reduce((total, cv) => total + cv.callNo, 0);
        this.cdr.detectChanges();
        break;
      case 'filter':
        //  this.getData();
        break;
    }
  }
  doall(): void {

    let url = 'api/admin/outStor/UpdatejiesuanAll';
    this.http.post<AjaxResult>(url, this.selectedRows).subscribe(result => {
      this.osharp.ajaxResult(result, () => {
        this.st.clearCheck();
        this.st.reload();

      });
    });

  }
}

