import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';
import { CodeMaatService} from '../codemaat.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl
} from "@angular/forms";

@Component({
  selector: 'app-codemaat-vcs',
  templateUrl: './codemaat-vcs.component.html',
  styleUrls: ['./codemaat-vcs.component.css']
  
})
export class CodemaatVcsComponent implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public codemaat: CodeMaatService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({   
        inputLogFile: [, Validators.required],
        outputFile: [, Validators.required],
        versionControlType: ["git2", Validators.required], 
        analysis: ["authors", Validators.required],
        inputEncoding: ["UTF-8", Validators.required],
        maxRows: [0, Validators.required],
        minRevisions: [5, Validators.required],
        minSharedRevisions: [5, Validators.required],
        minCouplings: [30, Validators.required],
        maxCouplings: [100, Validators.required],
        maxChangeSetSize: [30, Validators.required],
        groupFile: ["null", Validators.required],
        regex: ["null", Validators.required],
        temporalPeriod: ["null", Validators.required],
        agetimeNow: ["0", Validators.required],
    });
    if (this.isLoading==false) {
      this.codemaat.testvcsConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to Code Maat vcs service, \n please download at https://hub.docker.com/repository/docker/nsfsain/codemaat-vcs-service, start image, and set port to 3021'
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
    data.append("inputLogFile", this.dataForm.get("inputLogFile").value);
    data.append("outputFile", this.dataForm.get("outputFile").value);
    data.append("versionControlType", this.dataForm.get("versionControlType").value);
    data.append("analysis", this.dataForm.get("analysis").value);
    data.append("inputEncoding", this.dataForm.get("inputEncoding").value);
    data.append("maxRows", this.dataForm.get("maxRows").value);  
    data.append("minRevisions", this.dataForm.get("minRevisions").value);
    data.append("minSharedRevisions", this.dataForm.get("minSharedRevisions").value);
    data.append("minCouplings", this.dataForm.get("minCouplings").value);
    data.append("maxCouplings", this.dataForm.get("maxCouplings").value);    
    data.append("maxChangeSetSize", this.dataForm.get("maxChangeSetSize").value); 
    data.append("groupFile", this.dataForm.get("groupFile").value);  
    data.append("regex", this.dataForm.get("regex").value); 
    data.append("temporalPeriod", this.dataForm.get("temporalPeriod").value);  
    data.append("agetimeNow", this.dataForm.get("agetimeNow").value); 

    this.submitted = true;
    this.isLoading = true;
    this.codemaat.runvcs(data).subscribe(
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

