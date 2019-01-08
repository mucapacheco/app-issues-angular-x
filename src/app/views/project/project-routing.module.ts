import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicLayoutComponent} from '../../components/common/layouts/basicLayout.component';
import {ProjectListComponent} from './project-list.component';
import {ProjectCadastroComponent} from './project-cadastro/project-cadastro.component';

const routes: Routes = [{
  path: 'projects',
  component: BasicLayoutComponent,
  children: [
    {path: 'list', component: ProjectListComponent},
    {path: 'cadastro', component: ProjectCadastroComponent},
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
