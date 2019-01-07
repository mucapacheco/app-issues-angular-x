import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {LayoutsModule} from './components/common/layouts/layouts.module';
import {AppviewsModule} from './views/appviews/appviews.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {DashboardsModule} from './views/dashboards/dashboards.module';
import {IssueTrackerModule} from './views/issue-tracker/issue-tracker.module';
import {ProjectModule} from './views/project/project.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutsModule,
    AppviewsModule,
    DashboardsModule,
    IssueTrackerModule,
    ProjectModule,
    RouterModule.forRoot([
      {
        path: 'app',
        loadChildren: './views/appviews/appviews.module#AppviewsModule'
      },
      {
        path: 'dashboards',
        loadChildren: './views/dashboards/dashboards.module#DashboardsModule'
      },
      {
        path: 'issue-tracker',
        loadChildren: './views/issue-tracker/issue-tracker.module#IssueTrackerModule'
      },
      {
        path: 'projects',
        loadChildren: './views/projects/project.module#ProjectModule'
      },
      {path: '**',  redirectTo: 'app/login'},
      {path: '', redirectTo: 'app/starterview', pathMatch: 'full'},
    ])
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
