import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rbs-reservation-confirmation',
  templateUrl: './reservation-confirmation.component.html',
  styleUrls: ['./reservation-confirmation.component.less']
})
export class ReservationConfirmationComponent implements OnInit {

  public selectedWizardStep = 2;
  public splits = [];
  public splitsSummary = [
    { status: 'paid', type: 'Deposit', paymentMethod: 'VISA', paymentDate: '02/28/2020', paymentAmount: 2780.33 },
    { status: 'unpaid', type: 'Deposit', paymentMethod: 'TBD', paymentDate: '03/28/2020', paymentAmount: 2780.33 },
    { status: 'unpaid', type: 'Deposit', paymentMethod: 'TBD', paymentDate: '04/28/2020', paymentAmount: 2780.33 }
  ];
  public guestInfo = {
    firstName: 'Pablo',
    lastName: 'Franco',
    id: 1
  };

  public net = 7743.30;
  public tax = 497.69;
  public serviceCharge = 100.00;
  public totalPending = 5560.66;

  public reservedResources = [
    { name: 'Sunny Lodge', description: '4 guests', additionalDetails: '2 King - 4 Small' },
    { name: 'Lodge Bunkhouse', description: '1 bed', additionalDetails: '2 King - 4 Small' },
    { name: 'Lodge Bunkhouse', description: '1 bed', additionalDetails: '2 King - 4 Small' },
    { name: 'Spring Fishing Special', description: '4 Day Float Trip', additionalDetails: '' }
  ];

  public includedRates = [
    'Lodging', 'All meals (adult and child)', 'Late check out'
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.numberOfSplits = 3;
  }

  public set numberOfSplits(num: number) {
    this.splits = [];
    for (let index = 0; index < num; index++) {
      this.splits.push({});
    }
  }

  public cancel(): void {
    if (this.selectedWizardStep === 0) {
      this.router.navigate(['/reservations']);
    } else {
      this.selectedWizardStep = this.selectedWizardStep - 1;
    }
  }

  public next(): void {
    this.selectedWizardStep = this.selectedWizardStep + 1;
  }
}
