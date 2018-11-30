import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IssueTrackerRoutingModule} from './issue-tracker-routing.module';
import {LayoutsModule} from '../../components/common/layouts/layouts.module';
import {DashboardsRoutingModule} from '../dashboards/dashboards-routing.module';
import {IboxtoolsModule} from '../../components/common/iboxtools/iboxtools.module';
import {PeityModule} from '../../components/charts/peity';
import {JVectorMapModule} from '../../components/map/jvectorMap';
import {ChartsModule} from 'ng2-charts';
import {SparklineModule} from '../../components/charts/sparkline';
import {FlotModule} from '../../components/charts/flotChart';
import {IssueListComponent} from './issue-list.component';
import {IssueListBoxComponent} from './issue-list-box.component';


@NgModule({
  imports: [
    LayoutsModule,
    ChartsModule,
    FlotModule,
    IboxtoolsModule,
    PeityModule,
    SparklineModule,
    JVectorMapModule,
    CommonModule,
    IssueTrackerRoutingModule
  ],
  declarations: [IssueListComponent, IssueListBoxComponent],
  exports: [IssueListComponent]
})
export class IssueTrackerModule {
}
