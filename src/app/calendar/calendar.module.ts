import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!

import { CalendarComponent } from './calendar/calendar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    SharedModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
