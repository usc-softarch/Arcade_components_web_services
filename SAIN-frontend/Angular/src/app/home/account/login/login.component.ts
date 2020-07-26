import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from '../../../authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error:string=null;
  isLoading=false
  constructor(public auth:AuthenticationService, public router: Router,public formBuilder: FormBuilder) { }

  ngOnInit() {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/']);
    }
    this.loginForm= this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.auth.testConnection().subscribe(
      resData => {       
      },
      errorMessage => {
        this.error='Could not connect to sain authentication service, please download at \n https://hub.docker.com/repository/docker/nsfsain/sain-auth-service, start image, and set port to 3000' 
       
      });
  }

  get f(){
    return this.loginForm.controls;
  }
  login(){ 
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.isLoading=true
    this.auth.login(this.loginForm.value).subscribe(
      resData => {
        this.router.navigate(['/componentslist']);
      },
      errorMessage => {
        this.error=this.auth.handleError(errorMessage)
      }
    );
    this.isLoading=false
   
  }

}
