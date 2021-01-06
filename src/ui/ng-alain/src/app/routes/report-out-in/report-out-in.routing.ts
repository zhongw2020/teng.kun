// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="report-out-in.routing.ts" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACLGuard } from '@delon/acl';
import { ReportOutComponent } from './report-out/report-out.component';
import { ReportStoreComponent } from './report-store/report-store.component';
import { ReportInComponent } from './report-in/report-in.component';

const routes: Routes = [
  { path: 'report-out', component: ReportOutComponent, canActivate: [ACLGuard], data: { title: '出库报表管理', reuse: true, guard: 'Root.Admin.ReportOutIn.ReportOut.Read' } },
  { path: 'report-store', component: ReportStoreComponent, canActivate: [ACLGuard], data: { title: '库存报表管理', reuse: true, guard: 'Root.Admin.ReportOutIn.ReportStore.Read' } },
  { path: 'report-in', component: ReportInComponent, canActivate: [ACLGuard], data: { title: '入库报表管理', reuse: true, guard: 'Root.Admin.ReportOutIn.ReportIn.Read' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportOutInRoutingModule { }
