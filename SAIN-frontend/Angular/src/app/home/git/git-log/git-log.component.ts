import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';
import { GitService} from '../git.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl
} from "@angular/forms";

@Component({
  selector: 'app-git-log',
  templateUrl: './git-log.component.html',
  styleUrls: ['./git-log.component.css']
  
})
export class GitLogComponent  implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  public follow:boolean; public source:boolean; public fulldiff:boolean; public logsize:boolean;
  public numstat:boolean; public norenames:boolean; public allmatch:boolean; public invertgrep:boolean;
  public regexpIgnorecase:boolean; public basicRegexp:boolean; public extendedRegexp:boolean; public fixedstrings:boolean;
  public perlRegexp:boolean; public removeEmpty:boolean; public merges:boolean; public nominParents:boolean;
  public nomaxParents:boolean; public firstParent:boolean; public reflog:boolean; public alternateRefs:boolean;
  public singleworktree:boolean; public ignoremissing:boolean; public boundary:boolean; public all:boolean;

  
  constructor(public auth:AuthenticationService,public git: GitService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({   
        gitRepoURL: [, Validators.required],
        shallowSince: ["null", Validators.required],    
        follow: [false, Validators.required],
        source: [false, Validators.required],
        fulldiff: [false, Validators.required],
        logsize: [false, Validators.required] ,
        numstat: [false, Validators.required],
        norenames: [false, Validators.required],
        allmatch: [false, Validators.required],
        invertgrep: [false, Validators.required] ,
        regexpIgnorecase: [false, Validators.required],
        basicRegexp: [false, Validators.required],
        extendedRegexp: [false, Validators.required],
        fixedstrings: [false, Validators.required] ,
        perlRegexp: [false, Validators.required],
        removeEmpty: [false, Validators.required],
        merges: [false, Validators.required],
        nominParents: [false, Validators.required] ,
        nomaxParents: [false, Validators.required],
        firstParent: [false, Validators.required],
        reflog: [false, Validators.required],
        alternateRefs: [false, Validators.required] ,
        singleworktree: [false, Validators.required],
        ignoremissing: [false, Validators.required],
        boundary: [false, Validators.required],
        all: [false, Validators.required],
        optionalParams: ["null", Validators.required]
    });
    if (this.isLoading==false) {
      this.git.testgitlogConnection().subscribe(
        resData => {       
        },
        errorMessage => {
          this.error='Could not connect to Git Log service, \n please download at https://hub.docker.com/repository/docker/nsfsain/git-log-service, start image, and set port to 3022'
        });
    }
  }

  followCheckbox(follow){
    this.follow=follow;
  }

  sourceCheckbox(source){
    this.source=source;
  }

  fulldiffCheckbox(fulldiff){
    this.fulldiff=fulldiff;
  }

  logsizeCheckbox(logsize){
    this.logsize=logsize;
  }
  
  numstatCheckbox(numstat){
    this.numstat=numstat;
  }

  norenamesCheckbox(norenames){
    this.norenames=norenames;
  }

  allmatchCheckbox(allmatch){
    this.allmatch=allmatch;
  }

  invertgrepCheckbox(invertgrep){
    this.invertgrep=invertgrep;
  }
  regexpIgnorecaseCheckbox(regexpIgnorecase){
    this.regexpIgnorecase=regexpIgnorecase;
  }

  basicRegexpCheckbox(basicRegexp){
    this.basicRegexp=basicRegexp;
  }

  extendedRegexpCheckbox(extendedRegexp){
    this.extendedRegexp=extendedRegexp;
  }

  fixedstringsCheckbox(fixedstrings){
    this.fixedstrings=fixedstrings;
  }
  perlRegexpCheckbox(perlRegexp){
    this.perlRegexp=perlRegexp;
  }

  removeEmptyCheckbox(removeEmpty){
    this.removeEmpty=removeEmpty;
  }

  mergesCheckbox(merges){
    this.merges=merges;
  }

  nominParentsCheckbox(nominParents){
    this.nominParents=nominParents;
  }
  nomaxParentsCheckbox(nomaxParents){
    this.nomaxParents=nomaxParents;
  }

  firstParentCheckbox(firstParent){
    this.firstParent=firstParent;
  }

  reflogCheckbox(reflog){
    this.reflog=reflog;
  }

  alternateRefsCheckbox(alternateRefs){
    this.alternateRefs=alternateRefs;
  }

  singleworktreeCheckbox(singleworktree){
    this.singleworktree=singleworktree;
  }

  ignoremissingCheckbox(ignoremissing){
    this.ignoremissing=ignoremissing;
  }

  boundaryCheckbox(boundary){
    this.boundary=boundary;
  }

  allCheckbox(all){
    this.all=all;
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
    data.append("gitRepoURL", this.dataForm.get("gitRepoURL").value);
    data.append("shallowSince", this.dataForm.get("shallowSince").value);
    data.append("follow", this.dataForm.get("follow").value);
    data.append("source", this.dataForm.get("source").value);
    data.append("fulldiff", this.dataForm.get("fulldiff").value);
    data.append("logsize", this.dataForm.get("logsize").value);     
    data.append("numstat", this.dataForm.get("numstat").value);
    data.append("extendedRegexp", this.dataForm.get("extendedRegexp").value);
    data.append("norenames", this.dataForm.get("norenames").value);
    data.append("allmatch", this.dataForm.get("allmatch").value);
    data.append("invertgrep", this.dataForm.get("invertgrep").value); 
    data.append("regexpIgnorecase", this.dataForm.get("regexpIgnorecase").value);
    data.append("basicRegexp", this.dataForm.get("basicRegexp").value);
    data.append("fixedstrings", this.dataForm.get("fixedstrings").value);
    data.append("perlRegexp", this.dataForm.get("perlRegexp").value); 
    data.append("removeEmpty", this.dataForm.get("removeEmpty").value);
    data.append("merges", this.dataForm.get("merges").value);
    data.append("nominParents", this.dataForm.get("nominParents").value);
    data.append("nomaxParents", this.dataForm.get("nomaxParents").value); 
    data.append("firstParent", this.dataForm.get("firstParent").value);
    data.append("reflog", this.dataForm.get("reflog").value);
    data.append("alternateRefs", this.dataForm.get("alternateRefs").value);
    data.append("singleworktree", this.dataForm.get("singleworktree").value); 
    data.append("ignoremissing", this.dataForm.get("ignoremissing").value);
    data.append("boundary", this.dataForm.get("boundary").value);
    data.append("all", this.dataForm.get("all").value);
    data.append("optionalParams", this.dataForm.get("optionalParams").value);  
    this.submitted = true;
    this.isLoading = true;
    this.git.rungitlog(data).subscribe(
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
