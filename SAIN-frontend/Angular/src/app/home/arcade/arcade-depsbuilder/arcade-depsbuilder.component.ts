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
  selector: 'app-arcade-depsbuilder',
  templateUrl: './arcade-depsbuilder.component.html',
  styleUrls: ['./arcade-depsbuilder.component.css']
  
})
export class ArcadeDepsBuilderComponent implements OnInit {  
  public dataForm: FormGroup;  
 
  public language= "java";
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public arcade: ArcadeService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
        language: ['java', Validators.required],
        classpath: ["Classpath", Validators.required],   
        srcDir: ["Source Dir", Validators.required],
        depsFile: ['Deps File', Validators.required]
    });
    if (this.isLoading==false) {
      this.arcade.testdepsBuilderConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to Depsbuilder service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-depsbuilders-service, start image, and set port to 3001' 
        });
    }
  }

  onRadioChange(language){    
    this.language=language;     
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

    this.dataForm.controls['language'].setValue(this.language); 

    const data = new FormData();    
    data.append("language", this.dataForm.get("language").value);
    data.append("classpath", this.dataForm.get("classpath").value);
    data.append("depsFile", this.dataForm.get("depsFile").value);
    data.append("srcDir", this.dataForm.get("srcDir").value);
  
    this.submitted = true;
    this.isLoading=true;
    this.arcade.rundepsBuilder(data).subscribe(
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
