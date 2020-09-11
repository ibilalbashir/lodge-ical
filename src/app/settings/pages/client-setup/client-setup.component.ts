import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ClientComponent } from '../../components/client/client.component';
import { CorrespondenceSetupComponent } from '../../components/correspondence-setup/correspondence-setup.component';
import { EmailBodySetupComponent } from '../../components/email-body-setup/email-body-setup.component';
import { EmailServerSetupComponent } from '../../components/email-server-setup/email-server-setup.component';


@Component({
  selector: 'rbs-client-setup',
  templateUrl: './client-setup.component.html',
  styleUrls: ['./client-setup.component.less']
})
export class ClientSetupComponent implements OnInit {
  submitForm: string;

  @ViewChild(ClientComponent) client: ClientComponent;
  @ViewChild(CorrespondenceSetupComponent) correspondenceSetup: CorrespondenceSetupComponent;
  @ViewChild(EmailBodySetupComponent) emailBody: EmailBodySetupComponent;
  @ViewChild(EmailServerSetupComponent) emailServer: EmailServerSetupComponent;

  constructor() { }

  ngOnInit(): void {
  }
  addCourse() {
    this.client.submitClientForm();
    this.correspondenceSetup.submitClientForm();
    this.emailBody.submitClientForm();
    this.emailServer.submitClientForm();
  }

}
