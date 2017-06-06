import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import 'hammerjs';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WeekPlanComponent } from './week-plan/week-plan.component';
import { PlanService } from './plan.service';
import { DailyPlanComponent } from './daily-plan/daily-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WeekPlanComponent,
    DailyPlanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule, 
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'plan',
        component: WeekPlanComponent
      },
      {
        path: ':id/lessons',
        component: DailyPlanComponent
      },
    ]),
  ],
  providers: [PlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
