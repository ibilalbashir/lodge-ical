import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbs-automations',
  templateUrl: './automations.component.html',
  styleUrls: ['./automations.component.less']
})
export class AutomationsComponent implements OnInit {

  public automations = [
    { trigger: 'When a new guest is created', action: 'Send an email to Guest that their reservation has been confirmed', type: 'guest-creation' },
    { trigger: 'Every month', action: 'Send financial report to owner', type: 'recurrence' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
