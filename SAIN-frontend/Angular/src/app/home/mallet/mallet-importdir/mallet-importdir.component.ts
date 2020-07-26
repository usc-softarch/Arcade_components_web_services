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
  selector: 'app-mallet-importdir',
  templateUrl: './mallet-importdir.component.html',
  styleUrls: ['./mallet-importdir.component.css']
  
})
export class MalletImportdirComponent implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public mallet: MalletService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({   
        srcDir: [, Validators.required],
        outputFile: [, Validators.required],   
        removeStopwords: ["TRUE", Validators.required],
        keepSequence: ["TRUE", Validators.required],
        prefixCode: ["null", Validators.required],
        preserveCase: ["FALSE", Validators.required],  
        stoplistFile: ["null", Validators.required],
        extraStopwords: ["null", Validators.required],
        skipHeader: ["FALSE", Validators.required],
        skipHtml: ["FALSE", Validators.required],   
        binaryFeatures: ["FALSE", Validators.required],
        gramSizes: [1, Validators.required],
        keepSequenceBigrams: ["FALSE", Validators.required],
        saveTextinSource: ["FALSE", Validators.required], 
        stringPipe: ["null", Validators.required],
        tokenPipe: ["null", Validators.required],
        fvPipe: ["null", Validators.required],
        encoding: ["UTF-8", Validators.required],   
        tokenRegex: ["\\p{Alpha}+", Validators.required],        
        printOutput: ["FALSE", Validators.required],
        usePipefromFile: ["null", Validators.required]
    });
    if (this.isLoading==false) {
      this.mallet.testimportdirConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to Topic Model Generator service, \n please download at https://hub.docker.com/repository/docker/nsfsain/mallet-importdir-service, start image, and set port to 3012'
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
    data.append("srcDir", this.dataForm.get("srcDir").value);
    data.append("outputFile", this.dataForm.get("outputFile").value);  
    data.append("removeStopwords", this.dataForm.get("removeStopwords").value);
    data.append("keepSequence", this.dataForm.get("keepSequence").value);  
    data.append("prefixCode", this.dataForm.get("prefixCode").value);
    data.append("preserveCase", this.dataForm.get("preserveCase").value); 
    data.append("stoplistFile", this.dataForm.get("stoplistFile").value);
    data.append("extraStopwords", this.dataForm.get("extraStopwords").value);  
    data.append("skipHeader", this.dataForm.get("skipHeader").value);
    data.append("skipHtml", this.dataForm.get("skipHtml").value);  
    data.append("binaryFeatures", this.dataForm.get("binaryFeatures").value);
    data.append("gramSizes", this.dataForm.get("gramSizes").value);  
    data.append("keepSequenceBigrams", this.dataForm.get("keepSequenceBigrams").value);
    data.append("saveTextinSource", this.dataForm.get("saveTextinSource").value);
    data.append("stringPipe", this.dataForm.get("stringPipe").value);
    data.append("tokenPipe", this.dataForm.get("tokenPipe").value); 
    data.append("fvPipe", this.dataForm.get("fvPipe").value);
    data.append("encoding", this.dataForm.get("encoding").value);
    data.append("tokenRegex", this.dataForm.get("tokenRegex").value);
    data.append("printOutput", this.dataForm.get("printOutput").value);
    data.append("usePipefromFile", this.dataForm.get("usePipefromFile").value);
    this.submitted = true;
    this.isLoading = true;
    this.mallet.runimportdir(data).subscribe(
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
