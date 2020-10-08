import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutStorPrintComponent } from './out-stor-print/out-stor-print.component';
import { PrintRoutingModule } from './print.routing';

@NgModule({
  imports: [
    CommonModule,
    PrintRoutingModule,
  ],
  declarations: [
   
    OutStorPrintComponent,
  ],
})
export class PrintModule { }
