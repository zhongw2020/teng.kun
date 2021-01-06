import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutStorPrintComponent } from './out-stor-print/out-stor-print.component';
import { PrintRoutingModule } from './print.routing';
import { OutStorPrint2Component } from './out-stor-print2/out-stor-print2.component';
import { OutStorPrint4Component } from './out-stor-print4/out-stor-print4.component';
import { OutStorPrint3Component } from './out-stor-print3/out-stor-print3.component';
import { SharedModule } from '../../shared';
import { OutStorPrint5Component } from './out-stor-print5/out-stor-print5.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PrintRoutingModule,
  ],
  declarations: [
   
    OutStorPrintComponent,
    OutStorPrint2Component,
    OutStorPrint3Component,
    OutStorPrint4Component,
    OutStorPrint5Component,
  ],
})
export class PrintModule { }
