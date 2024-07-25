import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonTaskComponent } from './button-task/button-task.component';
import { DashboardTaskComponent } from './dashboard-task/dashboard-task.component';
import { BadgeTaskComponent } from './badge-task/badge-task.component';

const routes: Routes = [
  {
    path: 'button-task',
    component: ButtonTaskComponent,
    title: 'Button task',
  },
  {
    path: 'dashboard-task',
    component: DashboardTaskComponent,
    title: 'Dashboard task',
  },
  {
    path: 'badge-task',
    component: BadgeTaskComponent,
    title: 'Badge task'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
