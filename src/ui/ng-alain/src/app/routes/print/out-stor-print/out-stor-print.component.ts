import { Component, OnInit } from '@angular/core';
import { request } from 'https';
import { _HttpClient } from '@delon/theme';
import { delay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';



@Component({


templateUrl:  './out-stor-print.component.html' 
 

})
export class OutStorPrintComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: _HttpClient) { }

  queryParams: any;
  res: any;


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
      this.res = res.table;
    });
    console.log(this.res);
  }

}
