import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';
import { LinuxService} from '../linux.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl
} from "@angular/forms";

@Component({
  selector: 'app-linux-sed',
  templateUrl: './linux-sed.component.html',
  styleUrls: ['./linux-sed.component.css']
  
})
export class LinuxSedComponent  implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public linux: LinuxService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({   
        inputFile: [, Validators.required],
        sedCommand: [, Validators.required],
        extendedRegex: ["null", Validators.required],
        sedCommandFile: ["null", Validators.required]
    });
    if (this.isLoading==false) {
      this.linux.testsedConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to Linux Sed service, \n please download at https://hub.docker.com/repository/docker/nsfsain/linux-sed-service, start image, and set port to 3023'
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
    data.append("sedCommand", this.dataForm.get("sedCommand").value);
    data.append("extendedRegex", this.dataForm.get("extendedRegex").value);  
    data.append("sedCommandFile", this.dataForm.get("sedCommandFile").value);
    this.submitted = true;
    this.isLoading = true;
    this.linux.runsed(data).subscribe(
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