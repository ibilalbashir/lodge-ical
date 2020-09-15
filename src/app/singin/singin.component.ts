import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'rbs-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.less']
})
export class SinginComponent implements OnInit {
  email: string = "";
  password: string = "";

  button: boolean = false
  loginForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder,) { }

  ngOnInit(): void {



  }

  SingInPassword($event) {
    this.email = $event.target.value;
  }

  SingInEmail($event) {
    this.password = $event.target.value;
    this.button = true
  }

  submit() {
    if (this.email == 'admin' && this.password == 'admin') {

      localStorage.setItem('token', 'This is a token')
      this.router.navigate(['/reservations']);




    } else
      alert('Your email and password is incorrect');
  }
}



