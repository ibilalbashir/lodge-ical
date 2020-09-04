import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { enterLeaveAnimation } from 'src/app/shared/enterLeave.animation';
import { Router } from '@angular/router';

@Component({
  selector: 'rbs-checkout-report',
  templateUrl: './checkout-report.component.html',
  styleUrls: ['./checkout-report.component.less'],
  animations: [
    enterLeaveAnimation
  ]
})
export class CheckoutReportComponent implements OnInit {

  @HostBinding('@enterLeave') enterLeave = true;
  @Output() onClose = new EventEmitter<boolean>();

  public billingDetails = [
    { date: '2/11/2020', ref: 125403, description: 'Loreme ipsum', charges: 650 },
    { date: '2/11/2020', ref: 125403, description: 'Loreme ipsum', charges: 650 },
    { date: '2/11/2020', ref: 125403, description: 'Loreme ipsum', charges: 650 },
    { date: '2/11/2020', ref: 125403, description: 'Loreme ipsum', charges: 650 },
    { date: '2/11/2020', ref: 125403, description: 'Loreme ipsum', charges: 650 },
    { date: '2/11/2020', ref: 125403, description: 'Loreme ipsum', charges: 650 },
    { date: '2/11/2020', ref: 125403, description: 'Loreme ipsum', charges: 650 },
    { date: '2/11/2020', ref: 125403, description: 'Loreme ipsum', charges: 650 },
    { date: '2/11/2020', ref: 125403, description: 'Loreme ipsum', charges: 650 },
    { date: '2/11/2020', ref: 125403, description: 'Loreme ipsum', charges: 650 },
    { date: '2/11/2020', ref: 125403, description: 'Loreme ipsum', charges: 650 },
    { date: '2/11/2020', ref: 125403, description: 'Loreme ipsum', charges: 650 },
    { date: '2/11/2020', ref: 125403, description: 'Loreme ipsum', charges: 650 },
    { date: '2/11/2020', ref: 125403, description: 'Loreme ipsum', charges: 650 }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public close(): void {
    this.onClose.emit();
    this.router.navigate(['reservations']);
  }

}
