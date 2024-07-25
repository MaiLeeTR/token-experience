import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonTaskComponent } from './button-task/button-task.component';
import { DashboardTaskComponent } from './dashboard-task/dashboard-task.component';
import { BadgeTaskComponent } from './badge-task/badge-task.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    ButtonTaskComponent,
    DashboardTaskComponent,
    BadgeTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
