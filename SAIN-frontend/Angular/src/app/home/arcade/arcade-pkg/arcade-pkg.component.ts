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
  selector: 'app-arcade-pkg',
  templateUrl: './arcade-pkg.component.html',
  styleUrls: ['./arcade-pkg.component.css']
  
})
export class ArcadePkgComponent  implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public arcade: ArcadeService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({   
        depsDir: [, Validators.required],
        pkgprefixes: [, Validators.required]        
    });
    if (this.isLoading==false) {
      this.arcade.testPkgConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to pkg service, \n please download at https://hub.docker.com/repository/docker/nsfsain/arcade-pkg-service, start image, and set port to 3004'
        });
    }
  }
  get f() {
    return this.dataForm.controls;
  }

  onSubmit() {
    
    if (
      !this.dataForm.valid //||
      // !this.historyRevisionFile ||
      // !this.structurl_DSMFile
    ) {
      return;
    }
    const data = new FormData();  
    data.append("depsDir", this.dataForm.get("depsDir").value);
    data.append("pkgprefixes", this.dataForm.get("pkgprefixes").value);      
    this.submitted = true;
    this.isLoading = true;
    this.arcade.runPkg(data).subscribe(
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

