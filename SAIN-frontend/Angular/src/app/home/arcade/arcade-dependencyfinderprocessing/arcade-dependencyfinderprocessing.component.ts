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
  selector: 'app-arcade-dependencyfinderprocessing',
  templateUrl: './arcade-dependencyfinderprocessing.component.html',
  styleUrls: ['./arcade-dependencyfinderprocessing.component.css']
  
})
export class ArcadeDependencyfinderprocessingComponent  implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public arcade: ArcadeService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
        inputDir: [, Validators.required],
        outputDir: [, Validators.required],
        depFinderDir: [, Validators.required],
        clusterDir: [, Validators.required],
        cloneDir: [, Validators.required],
        logicalDepFile: [, Validators.required],
        packageName: [, Validators.required]    
    });
    if (this.isLoading==false) {
      this.arcade.testdependencyFinderProcessingConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to Arcade DependencyFinderProcessingConnection service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-dependencyfinderprocessing-service, start image, and set port to 3027'
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
    data.append("clusterDir", this.dataForm.get("clusterDir").value); 
    data.append("depFinderDir", this.dataForm.get("depFinderDir").value);  
    data.append("cloneDir", this.dataForm.get("cloneDir").value);  
    data.append("logicalDepFile", this.dataForm.get("logicalDepFile").value); 
    data.append("packageName", this.dataForm.get("packageName").value); 
    this.submitted = true;
    this.isLoading = true;
    this.arcade.rundependencyFinderProcessing(data).subscribe(
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

