import { Component, OnInit } from '@angular/core';
import { request } from 'https';
import { _HttpClient } from '@delon/theme';
import { delay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { NumberToChineseModule } from '@delon/abc/number-to-chinese';


import { SFUISchema, SFSchema } from '@delon/form';
import { OsharpSTColumn } from '@shared/osharp/services/alain.types';
import { STComponentBase } from '@shared/osharp/components/st-component-base';
import { STData, STColumn } from '@delon/abc';
import { FilterRule, FilterOperate, AjaxResult } from '../../../shared/osharp/osharp.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({

  selector: 'app-out-stor-print',
  templateUrl: './out-stor-print.component.html',
  styleUrls: ['./out-stor-print.component.less']

})
export class OutStorPrintComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: _HttpClient) { }

  queryParams: any;
  res: any;
  salesout2: any;

  ngOnInit() {


    this.getdata();

  }
  ngAfterViewInit() {
    setTimeout(() => {
      window.print();
    }, 1000);
  }
  getdata() {

    this.route.queryParams.subscribe(params => {
      this.queryParams = params;
    })

    const url = 'api/admin/OutStor/PrintData?id=' + this.queryParams.id + '&&ComName=' + this.queryParams.ComName;

    this.http.get(url).subscribe((res: any) => {
      this.res = res.salesoutline.table;
      this.salesout2 = res.salesout;
      console.log(this.salesout2);
    });
  
  
  }

}
