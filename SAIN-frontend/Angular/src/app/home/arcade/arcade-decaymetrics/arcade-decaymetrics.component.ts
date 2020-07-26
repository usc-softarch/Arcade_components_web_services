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
  selector: 'app-arcade-decaymetrics',
  templateUrl: './arcade-decaymetrics.component.html',
  styleUrls: ['./arcade-decaymetrics.component.css']
  
})
export class ArcadeDecaymetricsComponent   implements OnInit {  
  public dataForm: FormGroup;  
 
  public language= "java";
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public arcade: ArcadeService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({      
        depsDir: [, Validators.required],
        clusterDir: [, Validators.required]        
    });
    if (this.isLoading==false) {
      this.arcade.testDecaymetricsConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to Decaymetrics service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-decaymetrics-service, start image, and set port to 3008' 
        });
    }
  }

  onRadioChange(language){
    this.language=language;
  }

  get f() {
    return this.dataForm.controls;
  }

  onSubmit() {
    
    if (
      !this.dataForm.valid 
    ) {
      return;
    }
    const data = new FormData();    
    data.append("depsDir", this.dataForm.get("depsDir").value);
    data.append("clusterDir", this.dataForm.get("clusterDir").value);
  
    this.submitted = true;
    this.isLoading=true;
    this.arcade.runDecaymetrics(data).subscribe(
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
