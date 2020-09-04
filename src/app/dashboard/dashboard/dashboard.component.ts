import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { Todo } from '../todo.model';
import { Day } from '../day.model';
import { AccountOverview } from '../account-overview.model';
import { enterLeaveAnimation } from 'src/app/shared/enterLeave.animation';

@Component({
  selector: 'rbs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  animations: [
    enterLeaveAnimation
  ]
})
export class DashboardComponent implements OnInit {

  public todos: Todo[];
  public schedule: Day[];
  public accountOverviews: AccountOverview[];
  public showAddReminder = false;

  constructor() {
    this.devBootstrap();
  }

  ngOnInit(): void {
  }

  private devBootstrap() {
    this.todos = [
      {
        state: 'task',
        type: 'Task from Karne',
        name: 'Complete task ABCD',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        dueDate: new Date()
      },
      {
        state: 'on time',
        type: 'Payment Request',
        name: 'Tiana Carder',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        dueDate: new Date()
      },
      {
        state: 'overdue',
        type: 'Payment Request',
        name: 'Jakob Botosh',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        dueDate: new Date()
      },
      {
        state: 'review',
        type: 'Payment Request',
        name: 'Corey Workman',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        dueDate: new Date()
      }
    ];

    this.schedule = [
      {
        date: new Date(),
        events: [
          { name: 'Bessie Webb Check In', date: new Date() },
          { name: 'Fishing trip for Macallan Family', date: new Date() }
        ]
      },
      {
        date: moment(new Date()).add(1, 'day').toDate(),
        events: [
          { name: 'Greenlee Family Check In', date: new Date() },
          { name: 'Sieber Team Check In', date: new Date() },
          { name: 'McAndrew Family Check In', date: new Date() }
        ]
      }
    ];

    this.accountOverviews = [
      { name: 'Rose Andrews', bookingDetails: '6 guests - Night 2 of 4 - Main Lodge', balanceDue: 3746 },
      { name: 'Tiana Carder', bookingDetails: '6 guests - Night 2 of 4 - Main Lodge', balanceDue: 1546 },
      { name: 'Rose Andrews', bookingDetails: '6 guests - Night 2 of 4 - Main Lodge', balanceDue: 3746 },
    ]
  }

}
