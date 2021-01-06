import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutStorPrintComponent } from './out-stor-print/out-stor-print.component';
import { OutStorPrint2Component } from './out-stor-print2/out-stor-print2.component';
import { OutStorPrint3Component } from './out-stor-print3/out-stor-print3.component';
import { OutStorPrint4Component } from './out-stor-print4/out-stor-print4.component';
import { OutStorPrint5Component } from './out-stor-print5/out-stor-print5.component';

const routes: Routes = [

  { path: 'out-stor-print', component: OutStorPrintComponent, data: { title: '打印' } },
  { path: 'out-stor-print2', component: OutStorPrint2Component, data: { title: '打印' } },
  { path: 'out-stor-print3', component: OutStorPrint3Component, data: { title: '打印' } },
  { path: 'out-stor-print4', component: OutStorPrint4Component, data: { title: '打印' } },
  { path: 'out-stor-print5', component: OutStorPrint5Component, data: { title: '打印' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintRoutingModule { }
