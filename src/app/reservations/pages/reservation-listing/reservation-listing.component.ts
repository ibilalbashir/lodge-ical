import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbs-reservation-listing',
  templateUrl: './reservation-listing.component.html',
  styleUrls: ['./reservation-listing.component.less']
})
export class ReservationListingComponent implements OnInit {

  public checkoutReportVisible = false;

  constructor() {
  }

  ngOnInit(): void { }

  //dev
  public showCheckoutReport(): void {
    this.checkoutReportVisible = true;
  }

  public hideCheckoutReport(): void {
    this.checkoutReportVisible = false;
  }

}
