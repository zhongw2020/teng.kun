// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="report-out-in.module.ts" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { ReportOutInRoutingModule } from './report-out-in.routing';
import { ReportOutComponent } from './report-out/report-out.component';
import { ReportStoreComponent } from './report-store/report-store.component';
import { ReportInComponent } from './report-in/report-in.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReportOutInRoutingModule
  ],
  declarations: [
    ReportOutComponent,
    ReportStoreComponent,
    ReportInComponent,
  ]
})
export class ReportOutInModule { }
