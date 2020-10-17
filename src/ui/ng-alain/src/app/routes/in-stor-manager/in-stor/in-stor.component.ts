// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="in-stor.module.ts" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

import { Component, OnInit, Injector } from '@angular/core';
import { SFUISchema, SFSchema, SFSelectWidgetSchema, SFArrayWidgetSchema } from '@delon/form';
import { OsharpSTColumn } from '@shared/osharp/services/alain.types';
import { STComponentBase } from '@shared/osharp/components/st-component-base';
import { STData } from '@delon/abc';
import { AjaxResult, FilterOperate, FilterRule, SortCondition } from '@shared/osharp/osharp.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-in-stor',
  templateUrl: './in-stor.component.html',
  styles: []
})
export class InStorComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.moduleName = 'inStor';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      {
        title: '操作', fixed: 'left', width: 65, buttons: [{
          text: '操作', children: [
            { text: '编辑', icon: 'edit', acl: 'Root.Admin.InStorManager.InStor.Update', iif: row => !(row.InstorVerifyState == '已通过'), click: row => this.edit(row) },
            //{ text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.InStorManager.InStor.Delete', iif: row => (row.InstorVerifyState == '待审核'),click: row => this.delete(row) },
             //{ text: '查看', icon: 'flag', type: 'static', acl: 'Root.Admin.InStorManager.InStor.Read', click: row => this.read(row) },
      
          ]
        }]
      },

      //{ title: '编号', index: 'Id', sort: true,  readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '入库凭证号', index: 'InstorVoucher', sort: { key: 'InstorVoucher', default:"descend"},readOnly:true, editable: true, filterable: true, ftype: 'string' },
      { title: '物品名称', index: 'MatName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '供应商名称', index: 'SupName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '单价', index: 'InstorPrice', sort: true,  editable: true, filterable: true, type: 'number' },
      { title: '入库数量', index: 'InstorNum', sort: true,  editable: true, filterable: true, type: 'number' },
      { title: '反冲数量', index: 'RecoilNum', sort: true, readOnly: true, editable: true, filterable: true, type: 'number' },
      { title: '入库时间', index: 'InstorDate', sort: true,   editable: true, filterable: true, type: 'date' },
     
      { title: '入库审核状态', index: 'InstorVerifyState', sort: true,  editable: true, filterable: true, ftype: "string", enum: ['待审核'], default: '待审核', },
      // { title: '审核意见', index: 'VerifyOpinion', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '反冲状态', index: 'RecoilState', sort: true,readOnly: true, editable: true, filterable: true, type: 'yn' },
      // { title: '反冲日期', index: 'RecoilDate', sort: true, editable: true, filterable: true, type: 'date' },
      // { title: '反冲原因', index: 'RecoilReason', sort: true, editable: true, filterable: true, ftype: 'string' },
      // { title: '反冲操作员', index: 'RecoilEmpId', sort: true, editable: true, filterable: true, ftype: 'string' },
      // { title: '作废时间', index: 'AbolishDate', sort: true, editable: true, filterable: true, type: 'date' },
      // { title: '作废原因', index: 'AbolishReason', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '结算标记', index: 'SupCloseAccuntsFlag', sort: true,  readOnly: true, editable: true, filterable: true, type: 'yn' },
      // { title: '作废操作员', index: 'AbolishEmpId', sort: true, editable: true, filterable: true, ftype: 'string' },
      // { title: '结算标记时间', index: 'SupCloseAccuntsDate', sort: true, editable: true, filterable: true, ftype: 'string' },
      // { title: '结算标记操作员', index: 'SupCloseAccuntsEmpId', sort: true, editable: true, filterable: true, ftype: 'string' },
      // { title: '结算备注', index: 'SupCloseAccuntsRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '入库操作员', index: 'InstorName', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '仓库名称', index: 'StorName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '作废标记', index: 'Abolishflag', sort: true,  readOnly: true, editable: true, filterable: true, type: 'yn' },
      { title: '备注', index: 'InstorRemark', sort: true, editable: true, filterable: true, ftype: 'string' },
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
      required: ['InstorVoucher']
    };
    return schema;
  }

 
  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 24 } },
      $InstorVoucher: { grid: { span: 24 } },
      $MatId: { grid: { span: 24 } },
      $SupId: { grid: { span: 24 } },
      $InstorName: { grid: { span: 24 } },
      $StorName: { grid: { span: 24 } },
      $VerifyOpinion: { grid: { span: 24 } },
      $InstorRemark: { grid: { span: 24 } },
      $RecoilReason: { grid: { span: 24 } },
      $RecoilEmpId: { grid: { span: 24 } },
      $AbolishReason: { grid: { span: 24 } },
      $AbolishEmpId: { grid: { span: 24 } },
      $SupCloseAccuntsDate: { grid: { span: 24 } },
      $SupCloseAccuntsEmpId: { grid: { span: 24 } },
      $SupCloseAccuntsRemark: { grid: { span: 24 } },

    };
    return ui;
  }
  private getRepositoryOfOptionData(url: string, name: string, key_names: string[], keyword?: string): Observable<string[]> {
    let rule = new FilterRule(name, keyword);
    rule.Operate = FilterOperate.Contains;
    this.request.FilterGroup.Rules = [];
    this.request.PageCondition.SortConditions = [];
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
 
  private createdate: any;
  private indate: any;
  protected datePipe: DatePipe = new DatePipe('en-US');
  create() {
    this.createdate = this.datePipe.transform(new Date(), 'yyyyMMddHHmmssS');
    this.indate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
    this.schema = {
      properties: {
        InstorVoucher: {
          type: 'string',
          format:'data-time',
          title: '入库凭证号',
          readOnly: true,
          default: this.createdate,
    
        },
       
        SupId: {
          type: 'string',
          title: '供应商名称',
          default: '请选择',
          ui: this.select_ui('api/Admin/SupBasedata/Read', 'SupName', ['SupId', 'SupName'])
        },
      
        //InstorName: {
        //  type: 'string',
        //  title: '入库操作人员',
        //  default: '请选择',
        //  ui: this.select_ui('api/Admin/EmpBasedata/Read', 'EmpName', ['EmpId', 'EmpName'])
        //},
        InstorVerifyState: {
          type: 'string',
          title: '入库状态审核',
          default: '待审核',
          readOnly: true,
        },
        InstorDate: {
          type: 'string',
          format: 'date-time',
          title: '入库时间',
          default: this.indate,
          ui: { grid: { span: 24} }
        },
    
        物品列表: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              MatId: {
                type: 'string',
                title: '物品名称',
                default: '请选择',
                ui: this.select_ui('api/Admin/MatBasedata/Read', 'MatName', ['MatId', 'MatName'])
              },

              InstorPrice: {
                type: 'number',
                title: '单价',
                readOnly: false,           
              },
              InstorNum: {
                type: 'number',
                title: '数量',
                readOnly: false,      
              },
              InstorRemark: {
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

}

