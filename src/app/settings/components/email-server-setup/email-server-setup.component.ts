import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'rbs-email-server-setup',
  templateUrl: './email-server-setup.component.html',
  styleUrls: ['./email-server-setup.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EmailServerSetupComponent implements OnInit {


  emailServersetupForm: FormGroup;
  // bname: any;
  constructor(private fb: FormBuilder) {
    this.emailServersetupForm = fb.group({
      // server: ['', Validators.required],
      // port: ['', Validators.required],
      // timeOut: ['', Validators.required],
      // userID: ['', Validators.required],
      // from: ['', Validators.required],
      // hash: ['', Validators.required],
      // testTo: ['', Validators.required],
    });


  }

  ngOnInit(): void {

  }
  public submitClientForm() {
    if (this.emailServersetupForm.dirty && this.emailServersetupForm.valid) {

      alert('form submit successful')
    } else {
      // alert('form submit unsuccessful')


      // this.emailServersetupForm.get('server').markAsTouched();
      // this.emailServersetupForm.get('port').markAsTouched();
      // this.emailServersetupForm.get('timeOut').markAsTouched();
      // this.emailServersetupForm.get('userID').markAsTouched();
      // this.emailServersetupForm.get('from').markAsTouched();
      // this.emailServersetupForm.get('hash').markAsTouched();
      // this.emailServersetupForm.get('testTo').markAsTouched();



    }
  }




}
