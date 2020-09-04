import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';

import { Day } from '../day.model';

@Component({
  selector: 'rbs-day-schedule',
  templateUrl: './day-schedule.component.html',
  styleUrls: ['./day-schedule.component.less']
})
export class DayScheduleComponent implements OnInit {

  @Input() data: Day;

  public endDate: Date;

  constructor() { }

  ngOnInit(): void {
    this.devBootstrap();
  }

  private devBootstrap() {
    this.endDate = moment(this.data.date).add(4, 'hours').toDate();
  }

}
