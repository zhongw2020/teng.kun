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
import { STComponentBase2 } from '@shared/osharp/components/st-component-base2';
import { STData, STColumn, XlsxService } from '@delon/abc';
import { FilterRule, FilterOperate, AjaxResult } from '../../../shared/osharp/osharp.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-out-stor-report',
  templateUrl: './out-stor-report.component.html',
  styles: []


})
export class OutStorReportComponent extends STComponentBase2 implements OnInit {

  constructor(injector: Injector, xlsx: XlsxService) {
    super(injector,xlsx);
    this.moduleName = 'outStor';
   
  }




  ngOnInit() {
    
    super.InitBase();

  }

  change(e) {
    this.SumRow();
  }

  //TotalRow() {
  //  for (let i: any = 0; i <=this.st._data.length; i++)
  //  {
  //    this.st.setRow(i, { OutstorSum: (this.st._data[i]['OutstorNum'] - this.st._data[i]['RecoilNum']) * this.st._data[i]['OutstorPrice'] });
  //  }
  //  console.log(this.st._data);
  //}

  tengkunsum: any = 0;

  SumRow() {
    this.tengkunsum = 0;
    for (let i: any = 0; i <=this.st._data.length; i++)
    {
    this.tengkunsum = this.tengkunsum + (this.st._data[i]['OutstorNum'] - this.st._data[i]['RecoilNum']) * this.st._data[i]['OutstorPrice'];
    }
    return this.tengkunsum;
  }


  
  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
     

      // { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number', },

      { title: '单据类型', index: 'OutstorCategory', readOnly: true, sort: true, editable: true, filterable: true, ftype: 'string' },

      { title: '出库凭证号', index: 'OutstorVoucher', readOnly: true, sort: { key: 'Id', default: "descend" }, editable: true, filterable: true, ftype: 'string', statistical: 'distinctCount', key: 'OutstorVoucher' },
      { title: '出账公司', index: 'OutstorComName', sort: true, editable: true, filterable: true, ftype: 'string', enum: ['腾坤', 'B公司', 'C公司', 'D公司'] },
      { title: '客户名称', index: 'CusName', sort: true, editable: true, filterable: true, ftype: 'string', },
      { title: '物品名称', index: 'MatName', sort: true, editable: true, filterable: true, ftype: 'string', render: 'MatName' },
      // { title: '单据类型', index: 'SupName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '出库时间', index: 'OutstorDate', sort: true, editable: true, filterable: true, type: 'date', },
      {
            title: { text: '小计', optional: '（单位：元）', optionalHelp: '扣除了反冲数量后的小计额' }, index: 'OutstorSum', type: 'number', statistical: 'sum', key: 'OutstorSum', render: 'OutstorSum'
      },
      { title: '出库单价', index: 'OutstorPrice', sort: true, editable: true, filterable: true, type: 'number', statistical: 'sum', key: 'OutstorPrice'},
     
      { title: '数量', index: 'OutstorNum', sort: true, editable: true, filterable: true, type: 'number', statistical: 'sum', key: 'OutstorNum'} ,
      {
        title: '反冲数量', index: 'RecoilNum', readOnly: true, sort: true, editable: true, filterable: true, type: 'number',
      },
      //{ title: '反冲状态', index: 'RecoilState', sort: true, editable: true, filterable: true, type: 'yn' },
      { title: '业务员', index: 'OutEmpName', sort: true, editable: true, filterable: true, ftype: 'string', enum: ['A员工', 'B员工', 'C员工'] },
      { title: '打印状态', index: 'PrintState', sort: true, editable: true, filterable: true, type: 'yn' },
      { title: '签回标记', index: 'CusCloseAccuntsFlag', sort: true, editable: true, filterable: true, type: 'yn', },
    //  { title: '签回人员', index: 'CusCloseAccuntsEmpId', sort: true, editable: true, filterable: true, type: 'radio', enum: ['员工A', '员工B', '员工C'] },
     // { title: '签回说明', index: 'CusCloseAccuntsRemark', sort: true, editable: true, filterable: true, ftype: 'string' },

      //{ title: '作废标记', index: 'Abolishflag', sort: true, editable: true, filterable: true, type: 'yn' },
      //{ title: '作废日期', index: 'AbolishDate', sort: true, editable: true, filterable: true, type: 'date' },
      //{ title: '作废原因', index: 'AbolishReason', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '反冲状态', index: 'RecoilState', sort: true, editable: true, filterable: true, type: 'yn' },
      //{ title: '反冲日期', index: 'RecoilDate', sort: true, editable: true, filterable: true, type: 'date' },
      //{ title: '反冲原因', index: 'RecoilReason', sort: true, editable: true, filterable: true, ftype: 'string' },
     
      //{ title: '打印模板名称', index: 'PrintMoName', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'string', enum:['腾坤','B','C','D'] },
      { title: '备注', index: 'OutstorRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
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
  private getRepositoryOfOptionData(url: string, name: string, key_names: string[], keyword?: string): Observable<string[]> {
    let rule = new FilterRule(name, keyword);
    rule.Operate = FilterOperate.Contains;
    this.request.FilterGroup.Rules = [];
    this.request.FilterGroup.Rules.push(rule);
    return this.http.post(url, this.request).pipe(map((resp: any) => {
      const arr = [];
      const list = resp.Rows;
      if (list && list.length) {
        list.forEach(element => {
          let label = ''
          key_names.forEach(s => { label += (label !== '' ? ' | ' : '') + element[s] })
          arr.push({ label, value: element.Id });
        });
      }
      return arr;
    }),
    );

  }
  private addSelectOption(optionList: any[]) {
    // const option = {};
    // if(true){//加上你的判断条件
    //   // option['label'] = '下拉项文字';
    //   // option['value'] = '下拉项的值';

    //   //判断数据是否已存在
    //   const isExist = optionList.some((item) => {
    //     return item.value == option['value'];
    //   });
    //   if(!isExist){
    //     optionList.push(option);
    //   }
    // }
    return optionList;
  }
  select_ui(url: string, name: string, key_names: string[]) {
    return {
      widget: 'select',
      placeholder: '请选择',
      allowClear: true,
      serverSearch: true,
      notFoundContent: '没有任何数据',
      // 懒加载数据，利用管道，插入数据项
      // 如果是编辑状态addSelectiOtion方法进行判断，插入已选中数据项。
      // 方法getRepositoryOfOptionData返回的是observable
      asyncData: () => this.getRepositoryOfOptionData(url, name, key_names).pipe(map((
        value: any) => {
        return this.addSelectOption(value)
      })),
      onSearch: (keyword: string) => this.getRepositoryOfOptionData(url, name, key_names, keyword).toPromise(),
    }
  }

  
}

