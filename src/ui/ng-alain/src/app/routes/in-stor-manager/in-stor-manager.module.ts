// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="in-stor-manager.module.ts" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { InStorManagerRoutingModule } from './in-stor-manager.routing';
import { InStorComponent } from './in-stor/in-stor.component';
import { InVerifyComponent } from './in-verify/in-verify.component';
import { InRecoilComponent } from './in-recoil/in-recoil.component';
import { InCloseComponent } from './in-close/in-close.component';
import { InAbolishComponent } from './in-aboish/in-aboish.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InStorManagerRoutingModule
  ],
  declarations: [
    InStorComponent,
    InVerifyComponent,
    InRecoilComponent,
    InCloseComponent,
    InAbolishComponent,
  ]
})
export class InStorManagerModule { }
