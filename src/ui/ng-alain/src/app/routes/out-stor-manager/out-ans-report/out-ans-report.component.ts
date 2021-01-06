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

import { Component, OnInit, Injector } from '@angular/core';
import { SFUISchema, SFSchema } from '@delon/form';
import { OsharpSTColumn } from '@shared/osharp/services/alain.types';
import { STComponentBaseMatreport } from '@shared/osharp/components/st-component-base-matreport';
import { XlsxService } from '@delon/abc/xlsx';
import { STData } from '@delon/abc';

@Component({
  selector: 'app-out-stor',
  templateUrl: './out-ans-report.component.html',
  styles: []
})
export class OutAnsReportComponent extends STComponentBaseMatreport implements OnInit {

  constructor(injector: Injector,xlsx: XlsxService) {
    super(injector, xlsx);
    this.moduleName = 'outStor';
    this.reportpath = 'ReportAns';
  
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [


    
     { title: '出库凭证号', index: 'OutstorVoucher', readOnly: true, sort: true, editable: true, filterable: true, ftype: 'string', ui: { grid: { span: 24 } } },
     { title: '参考入库号', index: 'OutstorToIn', readOnly: true, sort: true, editable: true, filterable: true, ftype: 'string', ui: { grid: { span: 24 } } },
     { title: '物品名称', index: 'MatName', readOnly: true, sort: true, editable: true, filterable: true, ftype: 'string', ui: { grid: { span: 24 } } },

      
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

}

