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
  selector: 'app-arcade-batchclonefinder',
  templateUrl: './arcade-batchclonefinder.component.html',
  styleUrls: ['./arcade-batchclonefinder.component.css']
  
})
export class ArcadeBatchclonefinderComponent  implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public arcade: ArcadeService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
        inputDir: [, Validators.required],
        outputDir: [, Validators.required]       
    });
    if (this.isLoading==false) {
      this.arcade.tesbatchCloneFinderConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to Arcade Batch Clone Finder service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-batchclonefinder-service, start image, and set port to 3025'
        });
    }
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
    data.append("inputDir", this.dataForm.get("inputDir").value);  
    data.append("outputDir", this.dataForm.get("outputDir").value);  
    this.submitted = true;
    this.isLoading = true;
    this.arcade.runbatchCloneFinder(data).subscribe(
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
