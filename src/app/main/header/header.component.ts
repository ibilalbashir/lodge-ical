import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public tabs = [
    { title: 'Dashboard', route: 'dashboard' },
    { title: 'Reservations', route: 'reservations', notifications: 9 },
    { title: 'Calendar', route: 'calendar' },
    { title: 'Billing & Payments', route: 'billing' },
    { title: 'Guests', route: 'guests' },
    { title: 'Resources', route: 'resources' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
