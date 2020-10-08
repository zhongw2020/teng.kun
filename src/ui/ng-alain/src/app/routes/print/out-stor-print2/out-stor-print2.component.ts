import { Component, OnInit } from '@angular/core';
import { request } from 'https';
import { _HttpClient } from '@delon/theme';
import { delay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';



@Component({


  templateUrl: './out-stor-print2.component.html'


})
export class OutStorPrint2Component implements OnInit {

  constructor(private route: ActivatedRoute, private http: _HttpClient) { }

  num: any = 1;
  queryParams: any;
  res: any;


  ngOnInit() {


    this.getdata();
    // window.print();
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
    this.res = res.table;
     });
  }

}
