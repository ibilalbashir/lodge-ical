import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'rbs-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit {
  @Input() submitForm: string;
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
      businessEmail: ['', Validators.required, Validators.email],
      businessWebsite: ['', Validators.required],
      outfitterName: ['', Validators.required],
      outfitterLicenseNumber: ['', Validators.required],

    });
  }

  ngOnInit(): void {
  }
  public testConsole() {
    console.log('Allah Kareem')
  }
  public submitClientForm() {
    if (this.testForm.dirty && this.testForm.valid) {

      alert('form submit successful')
    } else {
      // alert('form submit unsuccessful')


      this.testForm.get('businessName').markAsTouched();
      this.testForm.get('businessAddress4').markAsTouched();
      this.testForm.get('businessAddress1').markAsTouched();
      this.testForm.get('zip').markAsTouched();
      this.testForm.get('city').markAsTouched();
      this.testForm.get('state').markAsTouched();
      this.testForm.get('businessPhone1').markAsTouched();
      this.testForm.get('businessPhone2').markAsTouched();
      this.testForm.get('businessEmail').markAsTouched();
      this.testForm.get('businessWebsite').markAsTouched();
      this.testForm.get('outfitterName').markAsTouched();
      this.testForm.get('outfitterLicenseNumber').markAsTouched();

    }
  }
}

