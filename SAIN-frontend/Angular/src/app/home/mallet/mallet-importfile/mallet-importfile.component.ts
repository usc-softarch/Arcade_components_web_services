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
  selector: 'app-mallet-importfile',
  templateUrl: './mallet-importfile.component.html',
  styleUrls: ['./mallet-importfile.component.css']
  
})
export class MalletImportfileComponent  implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public mallet: MalletService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({   
        inputFile: [, Validators.required],
        outputFile: [, Validators.required],   
        prefixCode: ["null", Validators.required],
        lineRegex: ["^(\\S*)[\\s,]*(\\S*)[\\s,]*(.*)$", Validators.required],
        label: [2, Validators.required],
        name: [1, Validators.required], 
        data: [3, Validators.required],
        keepSequence: ["FALSE", Validators.required],
        keepSequenceBigrams: ["FALSE", Validators.required],
        removeStopwords: ["FALSE", Validators.required],  
        preserveCase: ["FALSE", Validators.required],
        encoding: ["UTF-8", Validators.required],
        tokenRegex: ["\\p{Alpha}+", Validators.required],
        printOutput: ["FALSE", Validators.required], 
        usePipefromFile: ["null", Validators.required],        
        stoplistFile: ["null", Validators.required],
        extraStopwords: ["null", Validators.required],        
    });
    if (this.isLoading==false) {
      this.mallet.testimportfileConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to Mallet import-file service, \n please download at https://hub.docker.com/repository/docker/nsfsain/mallet-importfile-service, start image, and set port to 3015'
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
    data.append("outputFile", this.dataForm.get("outputFile").value);  
    data.append("removeStopwords", this.dataForm.get("removeStopwords").value);
    data.append("keepSequence", this.dataForm.get("keepSequence").value);  
    data.append("prefixCode", this.dataForm.get("prefixCode").value);    
    data.append("preserveCase", this.dataForm.get("preserveCase").value);     
    data.append("stoplistFile", this.dataForm.get("stoplistFile").value);    
    data.append("extraStopwords", this.dataForm.get("extraStopwords").value); 
    data.append("lineRegex", this.dataForm.get("lineRegex").value);
    data.append("label", this.dataForm.get("label").value);  
    data.append("name", this.dataForm.get("name").value);
    data.append("data", this.dataForm.get("data").value); 
    data.append("keepSequenceBigrams", this.dataForm.get("keepSequenceBigrams").value);
    data.append("encoding", this.dataForm.get("encoding").value);
    data.append("tokenRegex", this.dataForm.get("tokenRegex").value);
    data.append("printOutput", this.dataForm.get("printOutput").value);
    data.append("usePipefromFile", this.dataForm.get("usePipefromFile").value);
    this.submitted = true;
    this.isLoading = true;
    this.mallet.runimportfile(data).subscribe(
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

