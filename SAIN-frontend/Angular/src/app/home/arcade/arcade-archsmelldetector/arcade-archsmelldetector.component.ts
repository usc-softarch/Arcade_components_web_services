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
  selector: 'app-arcade-archsmelldetector',
  templateUrl: './arcade-archsmelldetector.component.html',
  styleUrls: ['./arcade-archsmelldetector.component.css']
  
})
export class ArcadeArchsmelldetectorComponent implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public arcade: ArcadeService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({   
        depsFile: [, Validators.required],
        clusteredFile: [, Validators.required],
        smellFile: [, Validators.required]
    });
    if (this.isLoading==false) {
      this.arcade.testArchsmelldetectorConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to Archsmelldetector service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-archsmelldetector-service, start image, and set port to 3003'
        });
    }
  }
  get f() {
    return this.dataForm.controls;
  }

  onSubmit() {    
    if (
      !this.dataForm.valid //||
      // !this.historyRevisionFile ||
      // !this.structurl_DSMFile
    ) {
      return;
    }
    const data = new FormData();  
    data.append("depsFile", this.dataForm.get("depsFile").value);
    data.append("clusteredFile", this.dataForm.get("clusteredFile").value);  
    data.append("smellFile", this.dataForm.get("smellFile").value);
    this.submitted = true;
    this.isLoading=true
    this.arcade.runArchsmelldetector(data).subscribe(
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