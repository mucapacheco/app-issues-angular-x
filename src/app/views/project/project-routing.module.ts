import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicLayoutComponent} from '../../components/common/layouts/basicLayout.component';
import {ProjectListComponent} from './project-list.component';

const routes: Routes = [{
  path: 'projects',
  component: BasicLayoutComponent,
  children: [
    {path: 'list', component: ProjectListComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
