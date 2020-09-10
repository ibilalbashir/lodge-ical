import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router: Router) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token')

    return !!token
  }

  canActivate() : boolean {
    if(!this.isAuthenticated()){
      this.router.navigate(['login'])
      return false
    } else {
      return true
    }
  }
}
