// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="in-stor-manager.routing.ts" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACLGuard } from '@delon/acl';
import { InStorComponent } from './in-stor/in-stor.component';
import { InAbolishComponent } from './in-aboish/in-aboish.component';
import { InCloseComponent } from './in-close/in-close.component';
import { InRecoilComponent } from './in-recoil/in-recoil.component';
import { InVerifyComponent } from './in-verify/in-verify.component';

const routes: Routes = [
  { path: 'in-stor', component: InStorComponent, canActivate: [ACLGuard], data: { title: '新建入库', reuse: true, guard: 'Root.Admin.InStorManager.InStor.Read' } },
  { path: 'in-verify', component: InVerifyComponent, canActivate: [ACLGuard], data: { title: '入库审核', reuse: true, guard: 'Root.Admin.InStorManager.InStor.Read' } },
  { path: 'in-recoil', component: InRecoilComponent, canActivate: [ACLGuard], data: { title: '入库反冲', reuse: true, guard: 'Root.Admin.InStorManager.InStor.Read' } },
  { path: 'in-close', component: InCloseComponent, canActivate: [ACLGuard], data: { title: '入库结算', reuse: true, guard: 'Root.Admin.InStorManager.InStor.Read' } },
  { path: 'in-aboish', component: InAbolishComponent, canActivate: [ACLGuard], data: { title: '入库作废', reuse: true, guard: 'Root.Admin.InStorManager.InStor.Read' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InStorManagerRoutingModule { }
