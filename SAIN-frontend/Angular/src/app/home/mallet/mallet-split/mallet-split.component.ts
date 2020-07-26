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
  selector: 'app-mallet-split',
  templateUrl: './mallet-split.component.html',
  styleUrls: ['./mallet-split.component.css']
  
})
export class MalletSplitComponent implements OnInit {  
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
        outputFile: [, Validators.required], 
        trainingPortion: [1.0, Validators.required], 
        validationPortion: [0.0, Validators.required],  
        randomSeed: [0, Validators.required],
        trainingFile: ["null", Validators.required],   
        testingFile: ["null", Validators.required], 
        validationFile: ["null", Validators.required],
        pruneInfogain: [0, Validators.required],  
        pruneCount: [0, Validators.required],
        vectorToSequence: ["false", Validators.required],
        hideTargets: ["false", Validators.required],
        revealTargets: ["false", Validators.required]
            
    });
    if (this.isLoading==false) {
      this.mallet.testsplitConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to Mallet Split service, \n please download at https://hub.docker.com/repository/docker/nsfsain/mallet-split-service, start image, and set port to 3020'
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
    data.append("outputFile", this.dataForm.get("outputFile").value);
    data.append("randomSeed", this.dataForm.get("randomSeed").value);
    data.append("trainingPortion", this.dataForm.get("trainingPortion").value);  
    data.append("validationPortion", this.dataForm.get("validationPortion").value);
    data.append("trainingFile", this.dataForm.get("trainingFile").value);
    data.append("testingFile", this.dataForm.get("testingFile").value);
    data.append("validationFile", this.dataForm.get("validationFile").value);  
    data.append("pruneInfogain", this.dataForm.get("pruneInfogain").value); 
    data.append("pruneCount", this.dataForm.get("pruneCount").value);  
    data.append("vectorToSequence", this.dataForm.get("vectorToSequence").value);   
    data.append("hideTargets", this.dataForm.get("hideTargets").value);  
    data.append("revealTargets", this.dataForm.get("revealTargets").value);       

    this.submitted = true;
    this.isLoading = true;
    this.mallet.runsplit(data).subscribe(
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
