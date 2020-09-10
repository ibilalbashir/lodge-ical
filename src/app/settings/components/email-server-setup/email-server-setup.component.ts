import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
      server: ['', Validators.required],
      port: ['', Validators.required],
      timeOut: ['', Validators.required],
      userID: ['', Validators.required],
      from: ['', Validators.required],
      hash: ['', Validators.required],
      testTo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

}
