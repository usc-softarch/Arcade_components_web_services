import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { AuthenticationService } from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public auth: AuthenticationService, public router: Router) {}

  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}
