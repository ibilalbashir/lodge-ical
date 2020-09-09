import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbs-reservation-sidebar',
  templateUrl: './reservation-sidebar.component.html',
  styleUrls: ['./reservation-sidebar.component.less']
})
export class ReservationSidebarComponent implements OnInit {
  public visitDate: string;
  constructor() { }

  ngOnInit(): void {
  }

}
