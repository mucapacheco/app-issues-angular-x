import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicLayoutComponent} from '../../components/common/layouts/basicLayout.component';
import {Dashboard1Component} from './dashboard1.component';
import {Dashboard2Component} from './dashboard2.component';
import {Dashboard3Component} from './dashboard3.component';
import {Dashboard4Component} from './dashboard4.component';
import {Dashboard5Component} from './dashboard5.component';

const routes: Routes = [{
  path: 'dashboards',
  component: BasicLayoutComponent,
  children: [
    {path: 'dashboard1', component: Dashboard1Component},
    {path: 'dashboard2', component: Dashboard2Component},
    {path: 'dashboard3', component: Dashboard3Component},
    {path: 'dashboard4', component: Dashboard4Component},
    {path: 'dashboard5', component: Dashboard5Component},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
