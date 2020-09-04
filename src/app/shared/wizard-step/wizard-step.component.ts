import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { WizardComponent } from '../wizard/wizard.component';

@Component({
  selector: 'rbs-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.less']
})
export class WizardStepComponent implements OnInit {

  @HostBinding('class.visible') get isVisible(): boolean {
    return this.wizard.selectedStep.name === this.stepTitle;
  }
  @Input() stepTitle: string;

  constructor(private wizard: WizardComponent) { }

  ngOnInit(): void {
    this.wizard.wizardSteps.push({ name: this.stepTitle, complete: false });
  }

}
