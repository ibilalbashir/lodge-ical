import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rbs-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.less']
})
export class WizardComponent implements OnInit {

  @Input() wizardTitle: string;
  @Input() selectedStepIndex = 0;

  public wizardSteps = [];

  constructor() { }

  ngOnInit(): void {
  }

  public get selectedStep() {
    return this.wizardSteps[this.selectedStepIndex] || null;
  }

}
