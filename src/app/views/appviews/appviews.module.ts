import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppviewsRoutingModule} from './appviews-routing.module';
import {SparklineModule} from '../../components/charts/sparkline';
import {PeityModule} from '../../components/charts/peity';
import {RouterModule} from '@angular/router';
import {StarterViewComponent} from './starterview.component';
import {LoginComponent} from './login.component';
import {RegisterComponent} from './register.component';

@NgModule({
  imports: [
    CommonModule,
    AppviewsRoutingModule,
    RouterModule,
    PeityModule,
    SparklineModule
  ],
  declarations: [StarterViewComponent, LoginComponent, RegisterComponent],
  exports: [StarterViewComponent, LoginComponent, RegisterComponent]
})
export class AppviewsModule {
}
