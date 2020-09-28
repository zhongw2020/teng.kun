// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="bpm.routing.ts" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACLGuard } from '@delon/acl';
import { LeaveBpComponent } from './leave-bp/leave-bp.component';
import { ExtraBpComponent } from './extra-bp/extra-bp.component';
import { LeaveVerifyComponent } from './leave-verify/leave-verify.component';
import { ExtraVerifyComponent } from './extra-verify/extra-verify.component';

const routes: Routes = [
  { path: 'leave-bp', component: LeaveBpComponent, canActivate: [ACLGuard], data: { title: '发起请假', reuse: true, guard: 'Root.Admin.Bpm.LeaveBp.Read' } },
  { path: 'extra-bp', component: ExtraBpComponent, canActivate: [ACLGuard], data: { title: '发起加班', reuse: true, guard: 'Root.Admin.Bpm.ExtraBp.Read' } },
  { path: 'leave-verify', component: LeaveVerifyComponent, canActivate: [ACLGuard], data: { title: '审批请假', reuse: true, guard: 'Root.Admin.Bpm.LeaveBp.Read' } },
  { path: 'extra-verify', component: ExtraVerifyComponent, canActivate: [ACLGuard], data: { title: '审批加班', reuse: true, guard: 'Root.Admin.Bpm.ExtraBp.Read' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BpmRoutingModule { }
