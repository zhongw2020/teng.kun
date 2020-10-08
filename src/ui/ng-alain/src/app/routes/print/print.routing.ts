import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutStorPrintComponent } from './out-stor-print/out-stor-print.component';

const routes: Routes = [

  { path: 'out-stor-print', component: OutStorPrintComponent, data: { title: '打印'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintRoutingModule { }
