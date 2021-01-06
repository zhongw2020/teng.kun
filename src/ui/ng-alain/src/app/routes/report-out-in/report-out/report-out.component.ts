// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="report-out.module.ts" company="teng.kun">
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
  selector: 'app-report-out',
  templateUrl: './report-out.component.html',
  styleUrls: ['./report-out.component.less']
})
export class ReportOutComponent extends STComponentBase implements OnInit {

  selectedRows: STData[] = [];
  totalCallNo2 = 0;
  totalCallNo = 0;
  totalCallNo3 = 0;

  constructor(injector: Injector, xlsx: XlsxService, private cdr: ChangeDetectorRef,) {
    super(injector);
    this.moduleName = 'reportOut';
  }

  ngOnInit() {
    super.InitBase();
    
  }

  setRowColor(record: STData, index: number) {
    if (record.OutstorPrice <= record.InstorPrice) {
      return 'sign-tr';
    }
  }

  tengkunsum: any = 0;
  tengkunsumcb: any = 0;
  
  arr = [0, 0];

  SumRow() {
    this.arr[0] = 0;
    this.arr[1] = 0;
    for (let i: any = 0; i <= this.st._data.length; i++) {
      this.arr[0] = this.arr[0] + (this.st._data[i]['OutstorNum'] - this.st._data[i]['RecoilNum']) * this.st._data[i]['InstorPrice'];
      this.arr[1] = this.arr[1] + (this.st._data[i]['OutstorNum'] - this.st._data[i]['RecoilNum']) * this.st._data[i]['OutstorPrice'];
    }
    return this.arr;
  }


  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      { title: '', index: 'key', type: 'checkbox' },
      //{ title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'string' },
      { title: '出库凭证号', index: 'OutstorVoucher', sort: { key: 'Id', default: "descend" },readOnly: true,  filterable: true, ftype: 'string' },
     // { title: '参考入库号', index: 'InstorVoucher', readOnly: true, sort: true, filterable: true, ftype: 'string' },
      { title: '单据类型', index: 'OutstorCategory', readOnly: true, sort: true, filterable: true, ftype: 'string' },
      { title: '客户名称', index: 'CusName', readOnly: true, sort: true, filterable: true, ftype: 'string' },

      { title: '业务员', index: 'OutEmpName', readOnly: true, sort: true, filterable: true, ftype: 'string' },


      { title: '物料名称', index: 'MatName', readOnly: true, sort: true, filterable: true, ftype: 'string' },
      { title: '出库数量', index: 'OutstorNum', readOnly: true, sort: true, filterable: true, type: 'number' },
      { title: '反冲数量', index: 'RecoilNum', readOnly: true, sort: true, filterable: true, type: 'number' },

   
      { title: '出库日期', index: 'OutstorDate', readOnly: true, sort: true, filterable: true, type: 'date' },
    // { title: '出库价格', index: 'OutstorPrice', readOnly: true, sort: true, filterable: true, type: 'number' },
      { title: '入库成本', index: 'InstorPrice', readOnly: true, sort: true, filterable: true, type: 'number' },
      {
        title: '成本总价', index: 'OutstorSum2', type: 'number', statistical: 'sum', key: 'OutstorSum2', render: 'OutstorSum2'
      },
      {
        title: '含税单价', index: 'OutstorSum0', type: 'number', statistical: 'sum', key: 'OutstorSum0', render: 'OutstorSum0'
      },
      {
        title: '销售总价', index: 'OutstorSum1', type: 'number', statistical: 'sum', key: 'OutstorSum1', render: 'OutstorSum1'
      },

      {
        title:  '利润金额', index: 'OutstorSum3', type: 'number', statistical: 'sum', key: 'OutstorSum3', render: 'OutstorSum3'
      },
      {
        title: '利润率%', index: 'OutstorSum4', type: 'number', statistical: 'sum', key: 'OutstorSum4', render: 'OutstorSum4'
      },
     
     
      { title: '客户结算', index: 'CusjiesuanAccuntsFlag', readOnly: true, sort: true, filterable: true, type: 'yn' },
      { title: '备注', index: 'OutstorRemark', readOnly: true, sort: true, filterable: true, ftype: 'string' },
      //{ title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
    ];
    return columns;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $OutstorVoucher: { grid: { span: 24 } },
      $InstorVoucher: { grid: { span: 24 } },
      $MatName: { grid: { span: 24 } },
      $CusName: { grid: { span: 24 } },
      $OutstorDate: { grid: { span: 24 } }
    };
    return ui;
  }
  change(e: STChange) {

    switch (e.type) {
      case 'checkbox':
        this.selectedRows = e.checkbox!;
        this.totalCallNo = this.selectedRows.reduce((total, cv) => total + (cv.OutstorNum - cv.RecoilNum) * (cv.OutstorPrice), 0);
        this.totalCallNo2 = this.selectedRows.reduce((total, cv) => total + (cv.OutstorNum - cv.RecoilNum) * (cv.InstorPrice), 0);
        this.totalCallNo3 = this.selectedRows.reduce((total, cv) => total + (cv.OutstorNum - cv.RecoilNum) * (cv.OutstorPrice - cv.InstorPrice), 0);
     
       
        this.cdr.detectChanges();

        this.SumRow();
        break;
      case 'filter':
        //  this.getData();
        this.SumRow();
        break;
      default: this.SumRow(); break;
    }
  }
  
}

