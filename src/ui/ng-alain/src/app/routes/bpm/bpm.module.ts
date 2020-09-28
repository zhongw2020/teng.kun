// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="bpm.module.ts" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { BpmRoutingModule } from './bpm.routing';
import { LeaveBpComponent } from './leave-bp/leave-bp.component';
import { ExtraBpComponent } from './extra-bp/extra-bp.component';
import { LeaveVerifyComponent } from './leave-verify/leave-verify.component';
import { ExtraVerifyComponent } from './extra-verify/extra-verify.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BpmRoutingModule
  ],
  declarations: [
    LeaveBpComponent,
    ExtraBpComponent,
    LeaveVerifyComponent,
    ExtraVerifyComponent,
  ]
})
export class BpmModule { }
