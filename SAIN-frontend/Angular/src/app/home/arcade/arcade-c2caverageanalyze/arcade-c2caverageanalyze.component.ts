import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';
import { ArcadeService} from '../arcade.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl
} from "@angular/forms";

@Component({
  selector: 'app-arcade-c2caverageanalyze',
  templateUrl: './arcade-c2caverageanalyze.component.html',
  styleUrls: ['./arcade-c2caverageanalyze.component.css']
  
})
export class ArcadeC2caverageanalyzeComponent   implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public arcade: ArcadeService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({   
        cvglogFile: [, Validators.required],              
    });
    if (this.isLoading==false) {
      this.arcade.testC2cAverageAnalyzeConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to C2cAverageAnalyze service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-c2caverageanalyze-service, start image, and set port to 3007'
        });
    }
  }
  get f() {
    return this.dataForm.controls;
  }

  onSubmit() {
    
    if (
      !this.dataForm.valid //||
    ) {
      return;
    }
    const data = new FormData();      
    data.append("cvglogFile", this.dataForm.get("cvglogFile").value);      
    this.submitted = true;
    this.isLoading = true;
    this.arcade.runC2cAverageAnalyze(data).subscribe(
      resData => {
        this.results=resData;
        console.log(this.results)
        this.isLoading=false;
      },
      errorMessage => {
        console.log(errorMessage)
        this.error='Unable to execute from back-end' 
        this.isLoading=false;
      });    
  }

}