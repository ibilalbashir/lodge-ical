import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ClientComponent } from '../../components/client/client.component';
import { CorrespondenceSetupComponent } from '../../components/correspondence-setup/correspondence-setup.component';
import { EmailBodySetupComponent } from '../../components/email-body-setup/email-body-setup.component';
import { EmailServerSetupComponent } from '../../components/email-server-setup/email-server-setup.component';


@Component({
  selector: 'rbs-client-setup',
  templateUrl: './client-setup.component.html',
  styleUrls: ['./client-setup.component.less'],

})
export class ClientSetupComponent implements OnInit {
  submitForm: string;
  public showRightMenu: boolean = false;
  panelOpenState = false;
  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;
  panelOpenState4 = false;
  panelOpenState5 = false;

  val: boolean;


  public automation = [
    { trigger: 'Bussiness Setup', action: 'Correspondence Setup', type: 'guest-creation' },
    { trigger: 'Logo Setup ' },
    { trigger: 'Email Body', action: 'Email Server', type: 'recurrence' }
  ];

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

  extendAll() {

    this.panelOpenState = !this.panelOpenState
  }



  onRightClick() {

    this.showRightMenu = true;

    this.panelOpenState = !this.panelOpenState
    this.panelOpenState2 = !this.panelOpenState2
    this.panelOpenState3 = !this.panelOpenState3
    this.panelOpenState4 = !this.panelOpenState4
    this.panelOpenState5 = !this.panelOpenState5


    return false;
  }

  onRightClickClose() {

    this.showRightMenu = true;


    this.panelOpenState = !this.panelOpenState
    this.panelOpenState2 = !this.panelOpenState2
    this.panelOpenState3 = !this.panelOpenState3
    this.panelOpenState4 = !this.panelOpenState4
    this.panelOpenState5 = !this.panelOpenState5


    return false;
  }





}
