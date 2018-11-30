import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login.component';
import {StarterViewComponent} from './starterview.component';
import {BasicLayoutComponent} from '../../components/common/layouts/basicLayout.component';
import {BlankLayoutComponent} from '../../components/common/layouts/blankLayout.component';

const routes: Routes = [
  {
    path: 'app', component: BasicLayoutComponent,
    children: [
      {path: 'starterview', component: StarterViewComponent}
    ]
  },
  {
    path: 'app', component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppviewsRoutingModule { }
