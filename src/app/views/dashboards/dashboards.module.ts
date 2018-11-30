import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardsRoutingModule} from './dashboards-routing.module';
import {Dashboard1Component} from './dashboard1.component';
import {Dashboard2Component} from './dashboard2.component';
import {Dashboard3Component} from './dashboard3.component';
import {Dashboard41Component} from './dashboard41.component';
import {Dashboard4Component} from './dashboard4.component';
import {Dashboard5Component} from './dashboard5.component';
import {JVectorMapModule} from '../../components/map/jvectorMap';
import {SparklineModule} from '../../components/charts/sparkline';
import {PeityModule} from '../../components/charts/peity';
import {IboxtoolsModule} from '../../components/common/iboxtools/iboxtools.module';
import {FlotModule} from '../../components/charts/flotChart';
import {ChartsModule} from 'ng2-charts';
import {LayoutsModule} from '../../components/common/layouts/layouts.module';

@NgModule({
  imports: [
     LayoutsModule,
     ChartsModule, FlotModule
    , IboxtoolsModule, PeityModule, SparklineModule,
    JVectorMapModule, CommonModule, DashboardsRoutingModule
  ],
  declarations: [Dashboard1Component, Dashboard2Component, Dashboard3Component,
    Dashboard4Component, Dashboard41Component, Dashboard5Component],
  exports: [Dashboard1Component, Dashboard2Component, Dashboard3Component,
    Dashboard4Component, Dashboard41Component, Dashboard5Component],
})
export class DashboardsModule {
}
