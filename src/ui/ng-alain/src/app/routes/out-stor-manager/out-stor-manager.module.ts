// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="out-stor-manager.module.ts" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { OutStorManagerRoutingModule } from './out-stor-manager.routing';
import { OutStorComponent } from './out-stor/out-stor.component';

import { OutRecoilComponent } from './out-recoil/out-recoil.component';
import { OutCloseComponent } from './out-close/out-close.component';
import { OutAboishComponent } from './out-aboish/out-aboish.component';
import { OutStorReportComponent } from './out-stor-report/out-stor-report.component';
import { OutPrintComponent } from './out-print/out-print.component';
import { OutCouDanComponent } from './out-coudan/out-coudan.component';
import { OutJiesuanComponent } from './out-jiesuan/out-jiesuan.component';
import { OutTestComponent } from './out-test/out-test.component';
import { OutCloseReportComponent } from './out-close-report/out-close-report.component';
import { OutAnsReportComponent } from './out-ans-report/out-ans-report.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OutStorManagerRoutingModule
  ],
  declarations: [
    OutStorComponent,
    OutRecoilComponent,
    OutCloseComponent,
    OutAboishComponent,
    OutStorReportComponent,
    OutPrintComponent,
    OutCouDanComponent,
    OutJiesuanComponent,
    OutTestComponent,
    OutCloseReportComponent,
    OutAnsReportComponent,
    ]
})
export class OutStorManagerModule { }
