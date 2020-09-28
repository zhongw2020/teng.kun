// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="base-module.module.ts" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { BaseModuleRoutingModule } from './base-module.routing';
import { CusBasedataComponent } from './cus-basedata/cus-basedata.component';
import { MatBasedataComponent } from './mat-basedata/mat-basedata.component';
import { SupBasedataComponent } from './sup-basedata/sup-basedata.component';
import { EmpBasedataComponent } from './emp-basedata/emp-basedata.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BaseModuleRoutingModule
  ],
  declarations: [
    CusBasedataComponent,
    MatBasedataComponent,
    SupBasedataComponent,
    EmpBasedataComponent,
  ]
})
export class BaseModuleModule { }
