// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="out-stor-manager.routing.ts" company="teng.kun">
//      teng.kun
//  </copyright>
//  <site>http://teng.kun</site>
//  <last-editor>teng.kun</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACLGuard } from '@delon/acl';
import { OutStorComponent } from './out-stor/out-stor.component';

import { OutRecoilComponent } from './out-recoil/out-recoil.component';
import { OutCloseComponent } from './out-close/out-close.component';
import { OutAboishComponent } from './out-aboish/out-aboish.component';

const routes: Routes = [
  { path: 'out-stor', component: OutStorComponent, canActivate: [ACLGuard], data: { title: '新建出库', reuse: true, guard: 'Root.Admin.OutStorManager.OutStor.Read' } },
  { path: 'out-recoil', component: OutRecoilComponent, canActivate: [ACLGuard], data: { title: '出库反冲', reuse: true, guard: 'Root.Admin.OutStorManager.OutStor.Read' } },
  { path: 'out-close', component: OutCloseComponent, canActivate: [ACLGuard], data: { title: '出库结算', reuse: true, guard: 'Root.Admin.OutStorManager.OutStor.Read' } },
  { path: 'out-aboish', component: OutAboishComponent, canActivate: [ACLGuard], data: { title: '出库作废', reuse: true, guard: 'Root.Admin.OutStorManager.OutStor.Read' } },


 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutStorManagerRoutingModule { }
