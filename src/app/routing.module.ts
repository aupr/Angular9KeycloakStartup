import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OptionsComponent} from './options/options.component';
import {AuthGuard} from './auth.guard';


const appRoutes: Routes = [
  {path: 'ttt', component: HomeComponent, canActivate: [AuthGuard], data: { roles: ['SuperUser', 'NormalUser'] }},
  {path: 'options', component: OptionsComponent, canActivate: [AuthGuard]},
  {path: 'ppp', component: OptionsComponent, canActivate: [AuthGuard]},
  {path: 'yyy', component: OptionsComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class RoutingModule { }
