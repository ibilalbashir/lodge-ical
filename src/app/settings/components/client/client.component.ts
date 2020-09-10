import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'rbs-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit {

  testForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.testForm = fb.group({
      businessName: ['', Validators.required],
      businessAddress1: ['', Validators.required],
      businessAddress4: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      businessPhone1: ['', Validators.required],
      businessPhone2: ['', Validators.required],
      businessEmail: ['', Validators.required],
      businessWebsite: ['', Validators.required],
      outfitterName: ['', Validators.required],
      outfitterLicenseNumber: ['', Validators.required],

    });
  }

  ngOnInit(): void {
  }
}

