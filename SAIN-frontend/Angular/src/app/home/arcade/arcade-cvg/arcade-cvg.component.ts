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
  selector: 'app-arcade-cvg',
  templateUrl: './arcade-cvg.component.html',
  styleUrls: ['./arcade-cvg.component.css']
  
})
export class ArcadeCvgComponent  implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public arcade: ArcadeService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({        
        clusterDir: [, Validators.required]        
    });
    if (this.isLoading==false) {
      this.arcade.testCvgConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to cvg service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-cvg-service, start image, and set port to 3006'
        });
    }
  }
  get f() {
    return this.dataForm.controls;
  }

  onSubmit() {
    
    if (
      !this.dataForm.valid //||
  
    ) {
      return;
    }
    const data = new FormData();  
    data.append("clusterDir", this.dataForm.get("clusterDir").value);       
    this.submitted = true;
    this.isLoading = true;
    this.arcade.runCvg(data).subscribe(
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
