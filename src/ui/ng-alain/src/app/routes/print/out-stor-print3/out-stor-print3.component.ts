import { Component, OnInit } from '@angular/core';
import { request } from 'https';
import { _HttpClient } from '@delon/theme';
import { delay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { NumberToChineseModule } from '@delon/abc/number-to-chinese';

@Component({

  selector: 'app-out-stor-print3',
  templateUrl: './out-stor-print3.component.html',
  styleUrls: ['./out-stor-print3.component.less']


})
export class OutStorPrint3Component implements OnInit {

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

    const url = 'api/admin/OutStor/PrintData?id=' + this.queryParams.id + '&&ComName=' + this.queryParams.ComName + '&&Item=' + this.queryParams.Item + '&&OutstorPrintName=' + this.queryParams.OutstorPrintName;
    this.http.get(url).subscribe((res: any) => {
      this.res = res.salesoutline.table;
      this.salesout2 = res.salesout;
      console.log(this.res);
    });


  }

}
