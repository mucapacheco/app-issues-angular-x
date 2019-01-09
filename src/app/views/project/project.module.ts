import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import {ProjectListComponent} from './project-list.component';
import { ProjectCadastroComponent } from './project-cadastro/project-cadastro.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectRoutingModule
  ],
  declarations: [ProjectListComponent, ProjectCadastroComponent],
  exports: [ProjectListComponent]
})
export class ProjectModule { }
