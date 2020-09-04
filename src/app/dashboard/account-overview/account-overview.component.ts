import { Component, OnInit, Input } from '@angular/core';
import { AccountOverview } from '../account-overview.model';

@Component({
  selector: 'rbs-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.less']
})
export class AccountOverviewComponent implements OnInit {

  @Input() data: AccountOverview;

  public showContactPanel = false;
  public selectedContactMethod = 'phone';

  constructor() { }

  ngOnInit(): void {
  }

  public selectContactMethod(method: string): void {
    this.selectedContactMethod = method;
  }

}
