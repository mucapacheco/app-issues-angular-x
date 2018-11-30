import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Dashboard1Component} from '../dashboards/dashboard1.component';
import {BasicLayoutComponent} from '../../components/common/layouts/basicLayout.component';
import {IssueListComponent} from './issue-list.component';
import {IssueListBoxComponent} from './issue-list-box.component';

const routes: Routes = [{
  path: 'issue-tracker',
  component: BasicLayoutComponent,
  children: [
    {path: '', component: IssueListComponent},
    {path: 'box', component: IssueListBoxComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueTrackerRoutingModule { }
