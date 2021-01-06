// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="base-module.routing.ts" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACLGuard } from '@delon/acl';
import { CusBasedataComponent } from './cus-basedata/cus-basedata.component';
import { MatBasedataComponent } from './mat-basedata/mat-basedata.component';
import { SupBasedataComponent } from './sup-basedata/sup-basedata.component';
import { EmpBasedataComponent } from './emp-basedata/emp-basedata.component';
import { MatReportComponent } from './mat-report/mat-report.component';

const routes: Routes = [
  { path: 'cus-basedata', component: CusBasedataComponent, canActivate: [ACLGuard], data: { title: '客户基础数据管理', reuse: true, guard: 'Root.Admin.BaseModule.CusBasedata.Read' } },
  { path: 'mat-basedata', component: MatBasedataComponent, canActivate: [ACLGuard], data: { title: '物品基础数据管理', reuse: true, guard: 'Root.Admin.BaseModule.MatBasedata.Read' } },
  { path: 'sup-basedata', component: SupBasedataComponent, canActivate: [ACLGuard], data: { title: '供应商基础数据管理', reuse: true, guard: 'Root.Admin.BaseModule.SupBasedata.Read' } },
  { path: 'emp-basedata', component: EmpBasedataComponent, canActivate: [ACLGuard], data: { title: '员工基础数据管理', reuse: true, guard: 'Root.Admin.BaseModule.EmpBasedata.Read' } },
  { path: 'mat-report', component: MatReportComponent, canActivate: [ACLGuard], data: { title: '物品库存预警', reuse: true, guard: 'Root.Admin.BaseModule.EmpBasedata.Read' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseModuleRoutingModule { }
