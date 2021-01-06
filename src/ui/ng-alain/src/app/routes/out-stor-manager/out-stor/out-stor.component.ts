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
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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
            { text: '编辑', icon: 'edit', acl: 'Root.Admin.OutStorManager.OutStor.Update', iif: row => !row.PrintState || (row.OutstorCategory == '凑单'), click: row => this.edit(row) },
            { text: '打印', icon: 'edit', acl: 'Root.Admin.OutStorManager.OutStor.PrintData', iif: row => !row.Abolishflag, click: row => this.printPage(row.OutstorVoucher, row.OutstorComName, row.Id) },
            //{ text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.OutStorManager.OutStor.Delete', click: row => this.delete(row) },
          ]
        }]
      },


      //{ title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '单据类型', index: 'OutstorCategory', sort: true, editable: true, filterable: true, ftype: 'string', enum: ['凑单', '常规'], },
      { title: '出库凭证号', index: 'OutstorVoucher', sort: { key: 'Id', default: "descend" }, readOnly: true, editable: true, filterable: true, ftype: 'string' },
      { title: '出账公司', index: 'OutstorComName', editable: true, filterable: true, ftype: 'string', enum: ['腾坤', '华业', '效信通', '帅坤', '华宇'] },
      {
        title: '客户名称', index: 'CusName', sort: true, editable: true, filterable: true, ftype: 'string', ui: { grid: { span: 24 } }
      },
      { title: '物品名称', index: 'MatName', sort: true, editable: true, filterable: true, ftype: 'string', ui: { grid: { span: 24 } } },
      // { title: '供应商名称', index: 'SupName', sort: true, editable: true, filterable: true, ftype: 'string', ui: { grid: { span: 24 } } },
      { title: '出库时间', index: 'OutstorDate', sort: true, editable: true, filterable: true, type: 'date', ui: { grid: { span: 24 } } },
      { title: '单价', index: 'OutstorPrice', sort: true, editable: true, filterable: true, type: 'number' },

      {
        title: '数量', index: 'OutstorNum', sort: true, editable: true, filterable: true, type: 'number', key: 'OutstorNum'
      },
      {
        title: '反冲数量', index: 'RecoilNum', readOnly: true, sort: true, editable: true, filterable: true, type: 'number',
      },
      { title: '业务员', index: 'OutEmpName', editable: true, sort: true, filterable: true, ftype: 'string', enum: ['陈琪', '陈伟'] },
      { title: '打印状态', index: 'PrintState', readOnly: true, sort: true, editable: true, filterable: true, type: 'yn' },
      { title: '签回标记', index: 'CusCloseAccuntsFlag', readOnly: true, sort: true, editable: true, filterable: true, type: 'yn', default: '0' },
      //  { title: '签回人员', index: 'CusCloseAccuntsEmpId', sort: true, editable: true, filterable: true, type: 'radio', enum: ['员工A', '员工B', '员工C'] },

      //{ title: '作废标记', index: 'Abolishflag', readOnly: true, editable: true, filterable: true, type: 'yn', default: '0' },
      //{ title: '作废日期', index: 'AbolishDate', sort: true, editable: true, filterable: true, type: 'date' },
      //{ title: '作废原因', index: 'AbolishReason', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '反冲状态', index: 'RecoilState', sort: true, editable: true, filterable: true, type: 'yn' },
      //{ title: '反冲日期', index: 'RecoilDate', sort: true, editable: true, filterable: true, type: 'date' },
      //{ title: '反冲原因', index: 'RecoilReason', sort: true, editable: true, filterable: true, ftype: 'string' },

      { title: '别名补充', index: 'PrintMoName', editable: true, sort: true, filterable: true, ftype: 'string' },
      //{ title: '打印名称', index: 'OutstorPrintName', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'string'},
      { title: '实际凭证', index: 'CDOutstorVoucher', editable: true, sort: true, filterable: true, ftype: 'string' },
      { title: '参考入库凭证', index: 'OutstorToIn', editable: true, sort: true, filterable: true, ftype: 'string' },
      { title: '备注', index: 'OutstorRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '说明', index: 'CusCloseAccuntsRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
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
      required: ['OutstorVoucher']
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
    this.request.PageCondition.SortConditions = [];
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
  //返回凭证号
  private getRepositoryOfOptionData2(url: string, name: string, key_names: string[], keyword?: string): Observable<string[]> {
    let rule = new FilterRule(name, keyword);
    rule.Operate = FilterOperate.Contains;
    this.request.FilterGroup.Rules = [];
    this.request.FilterGroup.Rules.push(rule);
    this.request.PageCondition.SortConditions = [];
    return this.http.post(url, this.request).pipe(map((resp: any) => {
      const arr = [];
      const list = resp.Rows;
      if (list && list.length) {
        list.forEach(element => {
          let label = ''
          key_names.forEach(s => { label += (label !== '' ? ' | ' : '') + element[s] })
          arr.push({ label, value: element.InstorVoucher });
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
  //返回凭证号
  select_ui2(url: string, name: string, key_names: string[]) {

    return {
      widget: 'select',
      placeholder: '请选择',
      allowClear: true,
      serverSearch: true,
      notFoundContent: '没有任何数据',
      // 懒加载数据，利用管道，插入数据项
      // 如果是编辑状态addSelectiOtion方法进行判断，插入已选中数据项。
      // 方法getRepositoryOfOptionData返回的是observable
      asyncData: () => this.getRepositoryOfOptionData2(url, name, key_names).pipe(map((
        value: any) => {
        return this.addSelectOption2(value)
      })),
      onSearch: (keyword: string) => this.getRepositoryOfOptionData2(url, name, key_names, keyword).toPromise(),


    }
  }
  //返回凭证号
  private addSelectOption2(optionList: any[]) {
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

  onChangeCategory(value: any) {

    this.i = 3;
    //const formdata = this.sf.value;
    //this.http
    //  .post(`/findProjectCategoryByRoot`, value)
    //  .subscribe((res: any) => {
    //    const enums = [];
    //    for (const entry of res) {
    //      enums.push({ label: entry.name, value: entry.id });
    //    }
    //    this.searchSchema.properties.categoryChildId.enum = enums;
    //    this.searchSchema.properties.categoryId.default = value;
    //    this.searchSchema.properties.status.default = formdata.status;
    //    this.sf.refreshSchema();
    //  });
  }


  i: any = 0;
  private createdate: any;
  private outdate: any;
  protected datePipe: DatePipe = new DatePipe('en-US');
  create() {

    this.createdate = this.datePipe.transform(new Date(), 'yyyyMMddHHmmssS');
    this.outdate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');

    this.schema = {
      properties: {
        OutstorCategory: {
          type: 'string',
          title: '单据类型',
          enum: ['凑单', '常规'],
          default: '常规',
        },
        OutstorVoucher: {
          type: 'string',
          title: '出库凭证号',
          readOnly: true,
          default: this.createdate,
        },
        CDOutstorVoucher: {
          type: 'string',
          title: '实际凭证',
          ui: {
            visibleIf: { OutstorCategory: (value: any) => value === '凑单' },
            grid: { span: 24 }
          }
        },
        OutstorComName:
        {
          type: 'string',
          title: '出账公司',
          enum: ['腾坤', '华业', '效信通', '帅坤', '华宇'],
          default: '腾坤',
        },
        CusId: {
          type: 'string',
          title: '客户名称',
          default: '请选择',
          ui: this.select_ui('api/Admin/CusBasedata/Read', 'CusName', ['CusId', 'CusName'])
        },

        //SupId: {
        //  type: 'string',
        //  title: '供应商名称',
        //  default: '请选择',
        //  ui: this.select_ui('api/Admin/SupBasedata/Read', 'SupName', ['SupId', 'SupName'])
        //},
        OutEmpId: {
          type: 'string',
          title: '业务员',
          default: '请选择',
          ui: this.select_ui('api/Admin/EmpBasedata/Read', 'EmpName', ['EmpId', 'EmpName'])
        },
        OutstorDate: {
          type: 'string',
          format: 'date-time',
          title: '出库时间',
          default: this.outdate,
          ui: { grid: { span: 24 } }

        },
        CusCloseAccuntsRemark: {
          type: 'string',
          title: '说明',

        },
        产品列表: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              MatId: {
                type: 'string',
                title: '物品名称',
                default: '请选择',
                ui: this.select_ui('api/Admin/MatBasedata/Read', 'MatName', ['MatId', 'MatName']),
              },
              PrintMoName: {
                type: 'string',
                title: '别名补充',
              },
              OutstorToIn: {
                type: 'string',
                title: '参考入库凭证',

                //ui: this.select_ui2('api/Admin/InStor/Read', 'MatName', ['InstorVoucher','InstorRemark']),
              },
              OutstorNum: {
                type: 'number',
                title: '数量',
                readOnly: false,
              },
              OutstorPrice: {
                type: 'number',
                title: '单价',
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
  printPage(OutstorVoucher: any, OutstorComName: any, Id: any) {

    if (OutstorComName == "腾坤") {
      window.open('http://192.168.7.177:7777/#/print/out-stor-print?id=' + OutstorVoucher + '&&ComName=' + OutstorComName + '&&Item=' + Id , '打印', 'top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
    }
    if (OutstorComName == "华业") {
      window.open('http://192.168.7.177:7777/#/print/out-stor-print2?id=' + OutstorVoucher + '&&ComName=' + OutstorComName + '&&Item=' + Id , '打印', 'top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
    }
    if (OutstorComName == "效信通") {
      window.open('http://192.168.7.177:7777/#/print/out-stor-print3?id=' + OutstorVoucher + '&&ComName=' + OutstorComName + '&&Item=' + Id , '打印', 'top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');

    }
    if (OutstorComName == "帅坤") {
      window.open('http://192.168.7.177:7777/#/print/out-stor-print4?id=' + OutstorVoucher + '&&ComName=' + OutstorComName + '&&Item=' + Id, '打印', 'top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');

    }
    if (OutstorComName == "华宇") {
      window.open('http://192.168.7.177:7777/#/print/out-stor-print5?id=' + OutstorVoucher + '&&ComName=' + OutstorComName + '&&Item=' + Id, '打印', 'top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
    }


    //if (OutstorComName == "腾坤") {
    //  window.open('http://localhost:4201/#/print/out-stor-print?id=' + OutstorVoucher + '&&ComName=' + OutstorComName + '&&Item=' + Id, '打印', 'top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
    //}
    //if (OutstorComName == "华业") {
    //  window.open('http://localhost:4201/#/print/out-stor-print2?id=' + OutstorVoucher + '&&ComName=' + OutstorComName + '&&Item=' + Id, '打印', 'top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
    //}
    //if (OutstorComName == "效信通") {
    //  window.open('http://localhost:4201/#/print/out-stor-print3?id=' + OutstorVoucher + '&&ComName=' + OutstorComName + '&&Item=' + Id, '打印', 'top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');

    //}
    //if (OutstorComName == "帅坤") {
    //  window.open('http://localhost:4201/#/print/out-stor-print4?id=' + OutstorVoucher + '&&ComName=' + OutstorComName + '&&Item=' + Id, '打印', 'top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
    //}
    //if (OutstorComName == "华宇") {
    //  window.open('http://localhost:4201/#/print/out-stor-print5?id=' + OutstorVoucher + '&&ComName=' + OutstorComName + '&&Item=' + Id, '打印', 'top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
    //}

  }
 }



