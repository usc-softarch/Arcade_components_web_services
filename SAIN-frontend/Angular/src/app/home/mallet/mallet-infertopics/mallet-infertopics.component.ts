import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';
import { MalletService} from '../mallet.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl
} from "@angular/forms";

@Component({
  selector: 'app-mallet-infertopics',
  templateUrl: './mallet-infertopics.component.html',
  styleUrls: ['./mallet-infertopics.component.css']
  
})
export class MalletInfertopicsComponent  implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public mallet: MalletService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({   
        prefixCode: ["null", Validators.required],
        inputFile: [, Validators.required],
        outputDocTopics: [, Validators.required],   
        inferencerFilename: ["null", Validators.required],
        doctopicsThreshold: [0.0, Validators.required], 
        docTopicsMax: [-1, Validators.required],
        numIterations: [1000, Validators.required], 
        sampleInterval: [10, Validators.required], 
        burnIn: [10, Validators.required], 
        randomSeed: [0, Validators.required],                
    });
    if (this.isLoading==false) {
      this.mallet.testinfertopicsConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to Mallet Infer Topics service, \n please download at https://hub.docker.com/repository/docker/nsfsain/mallet-infertopics-service, start image, and set port to 3017'
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
    data.append("prefixCode", this.dataForm.get("prefixCode").value);
    data.append("inputFile", this.dataForm.get("inputFile").value);
    data.append("outputDocTopics", this.dataForm.get("outputDocTopics").value);
    data.append("inferencerFilename", this.dataForm.get("inferencerFilename").value);  
    data.append("doctopicsThreshold", this.dataForm.get("doctopicsThreshold").value);  
    data.append("numIterations", this.dataForm.get("numIterations").value);   
    data.append("sampleInterval", this.dataForm.get("sampleInterval").value);  
    data.append("burnIn", this.dataForm.get("burnIn").value);   
    data.append("randomSeed", this.dataForm.get("randomSeed").value);

    this.submitted = true;
    this.isLoading = true;
    this.mallet.runinfertopics(data).subscribe(
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
