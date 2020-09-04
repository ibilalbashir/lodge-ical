import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { enterLeaveAnimation } from 'src/app/shared/enterLeave.animation';

@Component({
  selector: 'rbs-add-reminder',
  templateUrl: './add-reminder.component.html',
  styleUrls: ['./add-reminder.component.less'],
  animations: [
    enterLeaveAnimation
  ]
})
export class AddReminderComponent implements OnInit {

  @HostBinding('@enterLeave') enterLeaveAnimation = true;
  @HostBinding('class.visible')
  @Input() showReminder;
  @Output() showReminderChange = new EventEmitter<boolean>();

  public assignToOptions = [
    { displayValue: 'Glenn', value: 'glenn' },
    { displayValue: 'Kristin', value: 'kristin' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public save(): void {
    this.close();
  }

  public close(): void {
    this.showReminder = false;
    this.showReminderChange.emit(this.showReminder);
  }

}
