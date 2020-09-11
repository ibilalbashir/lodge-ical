import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms'
@Component({
  selector: 'rbs-correspondence-setup',
  templateUrl: './correspondence-setup.component.html',
  styleUrls: ['./correspondence-setup.component.less']
})
export class CorrespondenceSetupComponent implements OnInit {
  @Input() submitForm: string;
  CorrespondenceSetup = new FormGroup({
    solution: new FormControl('', Validators.required),
    signature: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  public submitClientForm() {
    if (this.CorrespondenceSetup.dirty && this.CorrespondenceSetup.valid) {

      alert('form submit successful')
    } else {
      // alert('form submit unsuccessful')


      this.CorrespondenceSetup.get('solution').markAsTouched();
      this.CorrespondenceSetup.get('signature').markAsTouched();
      this.CorrespondenceSetup.get('title').markAsTouched();


    }
  }

}
