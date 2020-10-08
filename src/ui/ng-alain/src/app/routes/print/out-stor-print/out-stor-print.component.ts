import { Component, OnInit } from '@angular/core';
import { request } from 'https';
import { _HttpClient } from '@delon/theme';
import { delay } from 'rxjs/operators';

@Component({

  templateUrl: './out-stor-print.component.html',

})
export class OutStorPrintComponent implements OnInit {

  constructor(private http: _HttpClient) { }

  num: any = 20;
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
    console.log(request);
    
    const url = `api/admin/OutStor/PrintData?id=001`;

    console.log(url);
    

    this.http.get(url).subscribe((res: any) => {

    console.log(res);
    if (!res) {

      return;
    }
  
  });
}

}
