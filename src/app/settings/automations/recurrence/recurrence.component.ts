import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbs-recurrence',
  templateUrl: './recurrence.component.html',
  styleUrls: ['./recurrence.component.less']
})
export class RecurrenceComponent implements OnInit {

  public options = [
    { value: 'day', display: 'day' },
    { value: 'week', display: 'week' },
    { value: 'month', display: 'month' },
    { value: 'year', display: 'year' }
  ];

  public days = [
    { value: 'sunday', display: 'S' },
    { value: 'monday', display: 'M' },
    { value: 'tuesday', display: 'T' },
    { value: 'wednesday', display: 'W' },
    { value: 'thursday', display: 'T' },
    { value: 'friday', display: 'F' },
    { value: 'saturday', display: 'S' }
  ];

  public selectedRepeat = 'day';
  public selectedDay;
  public ends = 'never';

  constructor() { }

  ngOnInit(): void {
  }

  public selectDay(day) {
    this.selectedDay = day;
  }

}
