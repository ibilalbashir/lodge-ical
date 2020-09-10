import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , NgForm , Validators } from '@angular/forms'


@Component({
  selector: 'rbs-email-body-setup',
  templateUrl: './email-body-setup.component.html',
  styleUrls: ['./email-body-setup.component.less']
})
export class EmailBodySetupComponent implements OnInit {


  
  loginForm = new FormGroup({
    recordType:new FormControl('',Validators.required),
    subject:new FormControl('',Validators.required),
    replyTo:new FormControl('',Validators.required),
    cc:new FormControl('',Validators.required),
    bcc:new FormControl('',Validators.required),
    header:new FormControl('',Validators.required),
    body:new FormControl('',Validators.required),
    footer:new FormControl('',Validators.required)
 })

  constructor() { }

  ngOnInit(): void {
  }

}
