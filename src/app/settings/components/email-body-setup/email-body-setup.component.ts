import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms'


@Component({
  selector: 'rbs-email-body-setup',
  templateUrl: './email-body-setup.component.html',
  styleUrls: ['./email-body-setup.component.less']
})
export class EmailBodySetupComponent implements OnInit {

  name = "Angular";
  heigth = "1.125rem";



  EmailBodySetup = new FormGroup({
    // recordType: new FormControl('', Validators.required),
    // subject: new FormControl('', Validators.required),
    // replyTo: new FormControl('', Validators.required),
    // cc: new FormControl('', Validators.required),
    // bcc: new FormControl('', Validators.required),
    // header: new FormControl('', Validators.required),
    // body: new FormControl('', Validators.required),
    // footer: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  public submitClientForm() {
    if (this.EmailBodySetup.dirty && this.EmailBodySetup.valid) {

      alert('form submit successful')
    } else {
      // alert('form submit unsuccessful')


      // this.EmailBodySetup.get('recordType').markAsTouched();
      // this.EmailBodySetup.get('subject').markAsTouched();
      // this.EmailBodySetup.get('replyTo').markAsTouched();
      // this.EmailBodySetup.get('cc').markAsTouched();
      // this.EmailBodySetup.get('bcc').markAsTouched();
      // this.EmailBodySetup.get('header').markAsTouched();
      // this.EmailBodySetup.get('body').markAsTouched();
      // this.EmailBodySetup.get('footer').markAsTouched();


    }
  }

  changeHeigth(textArea) {
    this.heigth = null;
    setTimeout(() => {
      this.heigth = textArea.scrollHeight + "px";
    });
  }

}
