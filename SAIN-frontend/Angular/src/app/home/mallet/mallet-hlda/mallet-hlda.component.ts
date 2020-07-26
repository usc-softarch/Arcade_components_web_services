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
  selector: 'app-mallet-hlda',
  templateUrl: './mallet-hlda.component.html',
  styleUrls: ['./mallet-hlda.component.css']
  
})
export class MalletHldaComponent implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public mallet: MalletService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({   
        inputFile: [, Validators.required],
        prefixCode: ["null", Validators.required],
        testingFile: ["null", Validators.required], 
        outputState: ["null", Validators.required],
        randomSeed: [0, Validators.required],
        showProgress: ["true", Validators.required],
        showTopicsInterval: [50, Validators.required],
        numtopwords: [20, Validators.required],
        numLevels: [3, Validators.required],
        alpha: [10.0, Validators.required],
        gamma: [1.0, Validators.required], 
        eta: [0.1, Validators.required], 
    });
    if (this.isLoading==false) {
      this.mallet.testhldasConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to Mallet hlda service, \n please download at https://hub.docker.com/repository/docker/nsfsain/mallet-hlda-service, start image, and set port to 3018'
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
    data.append("inputFile", this.dataForm.get("inputFile").value);
    data.append("prefixCode", this.dataForm.get("prefixCode").value);
    data.append("testingFile", this.dataForm.get("testingFile").value);
    data.append("outputState", this.dataForm.get("outputState").value);
    data.append("randomSeed", this.dataForm.get("randomSeed").value);
    data.append("showProgress", this.dataForm.get("showProgress").value);  
    data.append("showTopicsInterval", this.dataForm.get("showTopicsInterval").value);
    data.append("numtopwords", this.dataForm.get("numtopwords").value);
    data.append("numLevels", this.dataForm.get("numLevels").value);
    data.append("alpha", this.dataForm.get("alpha").value);    
    data.append("gamma", this.dataForm.get("gamma").value); 
    data.append("eta", this.dataForm.get("eta").value);  

    this.submitted = true;
    this.isLoading = true;
    this.mallet.runhlda(data).subscribe(
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
