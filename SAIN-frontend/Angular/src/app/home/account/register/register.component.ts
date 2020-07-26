import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../authentication.service'
import { MustMatch } from '../../../_helpers/must-match.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  public error:string
  isLoading=false
  constructor(public auth:AuthenticationService, public router: Router,public formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      }, {
        validator: MustMatch('password', 'confirmPassword')
    });
    this.auth.testConnection().subscribe(
      resData => {       
      },
      errorMessage => {
        this.error='Could not connect to sain authentication service, please download at \n https://hub.docker.com/repository/docker/nsfsain/sain-auth-service, start image, \nand set port to 3000' 
        
      });
  }
  get f(){ return this.registerForm.controls}
  
  register(){
    this.submitted=true
    if (!this.registerForm.valid) {
      return;
    }
    this.isLoading=true
    this.auth.register(this.registerForm.value).subscribe(
      resData => {
        this.router.navigate(['/login']);
      },
      errorMessage => {
        this.error=this.auth.handleError(errorMessage)
        
      }
    );
    this.isLoading=false
  }

}
