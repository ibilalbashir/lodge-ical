import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AuthGuardService } from '../../auth-guard.service';
import { filter } from 'rxjs/operators';
import { from } from 'rxjs';
@Component({
  selector: 'rbs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  public tabs = [
    { title: 'Dashboard', route: 'dashboard' },
    { title: 'Reservations', route: 'reservations', notifications: 9 },
    { title: 'Calendar', route: 'calendar' },
    { title: 'Billing & Payments', route: 'billing' },
    { title: 'Guests', route: 'guests' },
    { title: 'Resources', route: 'resources' }
  ];
  currentRoute: string;
  isHeader: boolean
  constructor(private router: Router, private _user: AuthGuardService) {
    this.isHeader = true
  }

  ngOnInit(): void {


  }
  ngAfterViewInit() {

  }

  Logout() {

    this._user.deleteToken();
    this.router.navigate(['login']);
  }


}


