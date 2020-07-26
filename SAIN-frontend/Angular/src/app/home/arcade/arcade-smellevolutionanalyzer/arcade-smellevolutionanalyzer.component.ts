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
  selector: 'app-arcade-smellevolutionanalyzer',
  templateUrl: './arcade-smellevolutionanalyzer.component.html',
  styleUrls: ['./arcade-smellevolutionanalyzer.component.css']
  
})
export class ArcadeSmellevolutionanalyzerComponent    implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public arcade: ArcadeService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({   
        smellsDir: [, Validators.required]           
    });
    if (this.isLoading==false) {
      this.arcade.testSmellEvolutionAnalyzerConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to Smellevolutionanalyzer service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-smellevolutionanalyzer-service, start image, and set port to 3010'
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
    data.append("smellsDir", this.dataForm.get("smellsDir").value);    
    this.submitted = true;
    this.isLoading = true;
    this.arcade.runSmellEvolutionAnalyzer(data).subscribe(
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

