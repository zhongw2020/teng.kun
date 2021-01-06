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
import { OutStorReportComponent } from './out-stor-report/out-stor-report.component';
import { OutPrintComponent } from './out-print/out-print.component';
import { OutCouDanComponent } from './out-coudan/out-coudan.component';
import { OutJiesuanComponent } from './out-jiesuan/out-jiesuan.component';
import { OutTestComponent } from './out-test/out-test.component';
import { OutCloseReportComponent } from './out-close-report/out-close-report.component';
import { OutAnsReportComponent } from './out-ans-report/out-ans-report.component';


const routes: Routes = [
  { path: 'out-stor', component: OutStorComponent, canActivate: [ACLGuard], data: { title: '新建出库', reuse: true, guard: 'Root.Admin.OutStorManager.OutStor.Read' } },
  { path: 'out-recoil', component: OutRecoilComponent, canActivate: [ACLGuard], data: { title: '出库反冲', reuse: true, guard: 'Root.Admin.OutStorManager.OutStor.Read' } },
  { path: 'out-close', component: OutCloseComponent, canActivate: [ACLGuard], data: { title: '出库签回', reuse: true, guard: 'Root.Admin.OutStorManager.OutStor.Read' } },
  { path: 'out-aboish', component: OutAboishComponent, canActivate: [ACLGuard], data: { title: '出库作废', reuse: true, guard: 'Root.Admin.OutStorManager.OutStor.Read' } },
  { path: 'out-stor-print', component: OutPrintComponent, canActivate: [ACLGuard], data: { title: '出库打印', reuse: true, guard: 'Root.Admin.OutStorManager.OutStor.Read' } },
  { path: 'out-stor-report', component: OutStorReportComponent, canActivate: [ACLGuard], data: { title: '出库报表', reuse: true, guard: 'Root.Admin.OutStorManager.OutStor.Read' } },
  { path: 'out-coudan', component: OutCouDanComponent, canActivate: [ACLGuard], data: { title: '新建凑单', reuse: true, guard: 'Root.Admin.OutStorManager.OutStor.Read' } },
  { path: 'out-jiesuan', component: OutJiesuanComponent, canActivate: [ACLGuard], data: { title: '出库结算', reuse: true, guard: 'Root.Admin.OutStorManager.OutStor.Read' } },
  { path: 'out-close-report', component: OutCloseReportComponent, canActivate: [ACLGuard], data: { title: '未签回报表', reuse: true, guard: 'Root.Admin.OutStorManager.OutStor.Read' } },
  { path: 'out-ans-report', component: OutAnsReportComponent, canActivate: [ACLGuard], data: { title: '疑问报表', reuse: true, guard: 'Root.Admin.OutStorManager.OutStor.Read' } },





  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutStorManagerRoutingModule { }
