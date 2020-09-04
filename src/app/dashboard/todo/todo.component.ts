import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'rbs-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit {

  @Input() data: Todo;

  public statusClass: string;

  constructor() { }

  ngOnInit(): void {
    switch (this.data.state) {
      case 'overdue':
        this.statusClass = 'overdue';
        break;
      case 'review':
        this.statusClass = 'review';
        break;
      default:
        break;
    }
  }

}
