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
  selector: 'app-arcade-a2a',
  templateUrl: './arcade-a2a.component.html',
  styleUrls: ['./arcade-a2a.component.css']
  
})
export class ArcadeA2aComponent  implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public arcade: ArcadeService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({   
        clusteredDir: [, Validators.required],
        distOp: [, Validators.required]        
    });
    if (this.isLoading==false) {
      this.arcade.testA2aConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to A2a service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-a2a-service, start image, and set port to 3005'
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
    data.append("clusteredDir", this.dataForm.get("clusteredDir").value);  
    data.append("distOp", this.dataForm.get("distOp").value);
    this.submitted = true;
    this.isLoading = true;
    this.arcade.runA2a(data).subscribe(
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