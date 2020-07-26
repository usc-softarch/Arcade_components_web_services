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
  selector: 'app-mallet-trainclassifier',
  templateUrl: './mallet-trainclassifier.component.html',
  styleUrls: ['./mallet-trainclassifier.component.css']
  
})
export class MalletTrainclassifierComponent implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public mallet: MalletService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({   
        inputFile: [, Validators.required],
        outputClassifier: [, Validators.required], 
        prefixCode: ["null", Validators.required],
        report: ["test:accuracy test:confusion train:accuracy", Validators.required], 
        trainer: ["new NaiveBayesTrainer()", Validators.required],
        trainingPortion: [1.0, Validators.required], 
        validationPortion: [0.0, Validators.required],        
        unlabeledPortion: [0.0, Validators.required], 
        randomSeed: [0, Validators.required],
        numTrials: [1, Validators.required],
        classifierEvaluator: ["null", Validators.required],
        verbosity: [-1, Validators.required],
        noOverwriteProgressMessages: ["false", Validators.required], 
        crossValidation: [0, Validators.required],
        trainingFile: ["null", Validators.required],   
        testingFile: ["null", Validators.required], 
        validationFile: ["null", Validators.required]           
    });
    if (this.isLoading==false) {
      this.mallet.testtrainclassifierConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to Mallet Train Topics service, \n please download at https://hub.docker.com/repository/docker/nsfsain/mallet-traintopics-service, start image, and set port to 3013'
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
    data.append("outputClassifier", this.dataForm.get("outputClassifier").value);  
    data.append("prefixCode", this.dataForm.get("prefixCode").value);
    data.append("report", this.dataForm.get("report").value);  
    data.append("trainer", this.dataForm.get("trainer").value);
    data.append("trainingPortion", this.dataForm.get("trainingPortion").value);  
    data.append("validationPortion", this.dataForm.get("validationPortion").value);
    data.append("unlabeledPortion", this.dataForm.get("unlabeledPortion").value);
    data.append("randomSeed", this.dataForm.get("randomSeed").value); 
    data.append("numTrials", this.dataForm.get("numTrials").value);
    data.append("classifierEvaluator", this.dataForm.get("classifierEvaluator").value); 
    data.append("verbosity", this.dataForm.get("verbosity").value); 
    data.append("noOverwriteProgressMessages", this.dataForm.get("noOverwriteProgressMessages").value);
    data.append("crossValidation", this.dataForm.get("crossValidation").value);  
    data.append("trainingFile", this.dataForm.get("trainingFile").value);
    data.append("testingFile", this.dataForm.get("testingFile").value);
    data.append("validationFile", this.dataForm.get("validationFile").value);  
    
    this.submitted = true;
    this.isLoading = true;
    this.mallet.runtrainclassifier(data).subscribe(
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
