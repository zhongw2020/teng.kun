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
import { STComponentBase } from '@shared/osharp/components/st-component-base';
import { STData, STColumn } from '@delon/abc';
import { FilterRule, FilterOperate, AjaxResult } from '../../../shared/osharp/osharp.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-out-stor',
  templateUrl: './out-stor.component.html',
  styles: []
  

})
export class OutStorComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.moduleName = 'outStor';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      {
        title: '操作', fixed: 'left', width: 65, buttons: [{
          text: '操作', children: [
            { text: '编辑', icon: 'edit', acl: 'Root.Admin.OutStorManager.OutStor.Update', iif: row => !row.PrintState,  click: row => this.edit(row) },
            { text: '打印', icon: 'edit', acl: 'Root.Admin.OutStorManager.OutStor.Update', iif: row => !row.Abolishflag, click: row => this.printPage(row.OutstorVoucher, row.OutstorComName)},
            //{ text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.OutStorManager.OutStor.Delete', click: row => this.delete(row) },
          ]
        }]
      },
      { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '出库凭证号', index: 'OutstorVoucher', eadOnly: true,  sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '出账公司', index: 'OutstorComName', sort: true, editable: true, filterable: true, ftype: 'string', enum: ['腾坤', '华业', '效信通','帅坤'] },
      { title: '客户名称', index: 'CusName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '物品名称', index: 'MatName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '供应商名称', index: 'SupName', sort: true, editable: true, filterable: true, ftype: 'string' },  
      { title: '单价', index: 'OutstorPrice', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '出库时间', index: 'OutstorDate', sort: true, editable: true, filterable: true, type: 'date' },
      {
        title: '数量', index: 'OutstorNum', sort: true, editable: true, filterable: true, type: 'number', key:'OutstorNum'},
      { title: '业务员', index: 'OutEmpName', sort: true, editable: true, filterable: true, ftype: 'string', enum: ['A员工', 'B员工', 'C员工'] },
      { title: '签回标记', index: 'CusCloseAccuntsFlag', sort: true, editable: true, filterable: true, type: 'yn', default:'0' },
    //  { title: '签回人员', index: 'CusCloseAccuntsEmpId', sort: true, editable: true, filterable: true, type: 'radio', enum: ['员工A', '员工B', '员工C'] },
     // { title: '签回说明', index: 'CusCloseAccuntsRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '作废标记', index: 'Abolishflag', sort: true, editable: true, filterable: true, type: 'yn', default: '0'},
      //{ title: '作废日期', index: 'AbolishDate', sort: true, editable: true, filterable: true, type: 'date' },
      //{ title: '作废原因', index: 'AbolishReason', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '反冲状态', index: 'RecoilState', sort: true, editable: true, filterable: true, type: 'yn' },
      //{ title: '反冲日期', index: 'RecoilDate', sort: true, editable: true, filterable: true, type: 'date' },
      //{ title: '反冲原因', index: 'RecoilReason', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '打印状态', index: 'PrintState', sort: true, editable: true, filterable: true, type: 'yn' },
      //{ title: '打印模板名称', index: 'PrintMoName', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'string', enum: ['腾坤', '华业', '效信通', '帅坤'] },
      { title: '备注', index: 'OutstorRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '创建者', index: 'CreatorId', type: 'number' },
      { title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
      { title: '更新者', index: 'LastUpdaterId', type: 'number' },
      { title: '更新时间', index: 'LastUpdatedTime', type: 'date' },
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

  create() {
    this.schema = {
      properties: {
        OutstorVoucher: {
          type: 'string',
          title: '出库凭证号',
          readOnly: false,
        },
        OutstorComName:
        {
          type: 'string',
           title: '出账公司',
          enum: ['腾坤', '华业', '效信通', '帅坤'],
          default: '腾坤',
        },
        CusId: {
          type: 'string',
          title: '客户编码',
          default: '请选择',
          ui: this.select_ui('api/Admin/CusBasedata/Read', 'CusName', ['CusId', 'CusName'])
        },

        SupId: {
          type: 'string',
          title: '供应商编码',
          default: '请选择',
          ui: this.select_ui('api/Admin/SupBasedata/Read', 'SupName', ['SupId', 'SupName'])
        },
        OutEmpId: {
          type: 'string',
          title: '业务员',
          default: '请选择',
          ui: this.select_ui('api/Admin/EmpBasedata/Read', 'EmpName', ['EmpId', 'EmpName'])
        },
        
        产品列表: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              MatId: {
                type: 'string',
                title: '物料编码',
                default: '请选择',
                ui: this.select_ui('api/Admin/MatBasedata/Read', 'MatName', ['MatId', 'MatName'])
              },

              OutstorPrice: {
                type: 'number',
                title: '价格',
                   readOnly: false,
              },
              OutstorNum: {
                type: 'number',
                title: '数量',
                 readOnly: false,
              },
              OutstorRemark: {
                type: 'string',
                title: '备注',

              },
            },
          },
          ui: { spanLabel: 5, grid: { arraySpan: 24, span: 24 } }
        }
      },


    };
    this.editRow = {};
    this.editTitle = '新增';
    this.editModal.open();
  }

  save(value: STData) {
    let url = value.Id ? this.updateUrl : this.createUrl;
    let values = []
    let item = {}
    //遍历value的属性
    for (let key_1 in value) {
      //如果是数组
      if (value[key_1] instanceof Array) {
        //遍历数组
        value[key_1].forEach(element => {
          //遍历元素的属性
          for (let key_2 in element) {
            item[key_2] = element[key_2]
          }
          //再次遍历value
          for (let key_3 in value) {
            //判断Key_1是否和key_3相同（是不是数组元素）
            if (key_1 !== key_3) {
              item[key_3] = value[key_3]
            }
          }
          values.push(item);

          console.log(item);
       

          item = {}
        });
      }
    }
    this.http.post<AjaxResult>(url, values).subscribe(result => {
      this.osharp.ajaxResult(result, () => {
        this.st.reload();
        this.editModal.destroy();
      });
    });
  }

  printPage(OutstorVoucher: any, OutstorComName: any) {

    if (OutstorComName == "腾坤") {
    window.open('http://localhost:4201/#/print/out-stor-print?id=' + OutstorVoucher + '&&ComName=' + OutstorComName,'打印','top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
    }
    if (OutstorComName == "华业") {
      window.open('http://localhost:4201/#/print/out-stor-print2?id=' + OutstorVoucher + '&&ComName=' + OutstorComName, '打印', 'top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
    }
    if (OutstorComName == "效信通") {
      window.open('http://localhost:4201/#/print/out-stor-print3?id=' + OutstorVoucher + '&&ComName=' + OutstorComName, '打印', 'top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');

    }
    if (OutstorComName == "帅坤") {
      window.open('http://localhost:4201/#/print/out-stor-print4?id=' + OutstorVoucher + '&&ComName=' + OutstorComName, '打印', 'top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
    }
  }
}


