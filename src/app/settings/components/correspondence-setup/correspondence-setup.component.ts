import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , NgForm , Validators } from '@angular/forms'
@Component({
  selector: 'rbs-correspondence-setup',
  templateUrl: './correspondence-setup.component.html',
  styleUrls: ['./correspondence-setup.component.less']
})
export class CorrespondenceSetupComponent implements OnInit {

  loginForm = new FormGroup({
    solution:new FormControl('',Validators.required),
    signature:new FormControl('',Validators.required),
    title:new FormControl('',Validators.required)
 })

  constructor() { }

  ngOnInit(): void {
  }

}
