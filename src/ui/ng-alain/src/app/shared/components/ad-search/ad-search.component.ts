import { AlainService } from '@shared/osharp/services/alain.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { OsharpService } from '@shared/osharp/services/osharp.service';
import { NzModalComponent } from 'ng-zorro-antd';
import { FilterRule, FilterOperate, PageRequest, FilterGroup } from '@shared/osharp/osharp.model';
import { List } from 'linqts';
import { OsharpSTColumn } from '@shared/osharp/services/alain.types';
import { DatePipe } from '@angular/common';
import { type } from 'os';

@Component({
  selector: 'osharp-ad-search',
  templateUrl: './ad-search.component.html',
  styles: [],
})
export class AdSearchComponent implements OnInit {
  @Input() request: PageRequest;
  @Input() columns: OsharpSTColumn[];
  @Input() columns2: OsharpSTColumn[];
  @Output() submited: EventEmitter<PageRequest> = new EventEmitter<PageRequest>();
  @ViewChild('searchModal', { static: false }) searchModal: NzModalComponent;

  rule: FilterRule;
  rule2: FilterRule;
  rule3: FilterRule;
  startdate: any;
  enddate: any;
  startdatestr:string = null;
  enddatestr: string = null;

  constructor(private osharp: OsharpService, private alain: AlainService) {
    this.rule = new FilterRule(null, null);
    this.rule2 = new FilterRule(null, null);
    this.rule.control = 'string';
   
  
 
   
  }

  ngOnInit() {
    this.columns = new List(this.columns)
      .Where(m => m.index && m.filterable ) // TODO: date 的UI未调好，暂不过滤
      .ToArray();
    this.rule.Field = this.columns[0].index.toString();

  }

  fieldChange(field: string) {
    let column = this.columns.find(m => m.index === field);
    if (!column) {
      this.osharp.warning(`指定属性${field}不存在`);
      return;
    }
    this.alain.changeFilterRuleType(this.rule, column);
  }
  protected datePipe: DatePipe = new DatePipe('en-US');
  search() {
    let field = this.rule.Field;
    if (!field) {
      this.osharp.warning('请选择要查询的列');
      return;
    }

    let column = this.columns.find(m => m.index === field);
    if (!column) {
      this.osharp.warning(`指定属性${field}不存在`);
      return;
    }
    field = column.filterIndex || field;

    let rule = new FilterRule(field, this.rule.Value);
    rule.Operate =
      this.rule.control === 'string'
        ? FilterOperate.Contains
        : FilterOperate.Equal;
    let group = new FilterGroup();
   
    group.Rules.push(rule);

   
    if (this.rule2.Field != null)
    {
      this.startdatestr = null;
      this.enddatestr = null;
      if (this.startdate != null) {
        this.startdatestr = this.datePipe.transform(this.startdate, 'yyyy-MM-dd');
      }
      if (this.enddate != null) {
        this.enddatestr = this.datePipe.transform(this.enddate, 'yyyy-MM-dd') + " 23:59";;
      }
   
      let rule2 = { Field: this.rule2.Field, Value: this.startdatestr, Operate: 8 };

      let rule3 = { Field: this.rule2.Field, Value: this.enddatestr, Operate: 6 };

      group.Rules.push(rule2);
      group.Rules.push(rule3);
    }
    this.request.FilterGroup = group;
    if (this.submited) {
      this.submited.emit(this.request);
    }
  }

  adSearch() {
    if (this.searchModal) {
      this.searchModal.open();
    }
  }

  adSearchSubmited(request: PageRequest) {
    if (this.submited) {
      this.submited.emit(request);
    }
  }

  reset() {
    this.rule = new FilterRule(null, null);
    if (this.searchModal) {
      this.searchModal.reset();
    }
  }
}
