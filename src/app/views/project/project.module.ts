import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import {ProjectListComponent} from './project-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  declarations: [ProjectListComponent],
  exports: [ProjectListComponent]
})
export class ProjectModule { }
