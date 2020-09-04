import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './todo/todo.component';
import { DayScheduleComponent } from './day-schedule/day-schedule.component';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { AddReminderComponent } from './add-reminder/add-reminder.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    TodoComponent,
    DayScheduleComponent,
    AccountOverviewComponent,
    AddReminderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
