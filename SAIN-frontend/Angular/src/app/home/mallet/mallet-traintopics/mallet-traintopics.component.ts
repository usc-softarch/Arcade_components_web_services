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
  selector: 'app-mallet-traintopics',
  templateUrl: './mallet-traintopics.component.html',
  styleUrls: ['./mallet-traintopics.component.css']
  
})
export class MalletTraintopicsComponent implements OnInit {  
  public dataForm: FormGroup;
 
  public results=null;
  public submitted = false;
  public isLoading = false;
  public error = null;
  
  constructor(public auth:AuthenticationService,public mallet: MalletService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({   
        topicmodelFile: [, Validators.required],
        inferencerFilename: [, Validators.required], 
        numtopwords: [20, Validators.required],
        numTopics: [10, Validators.required],  
        numThreads: [1, Validators.required],
        numIterations: [1000, Validators.required], 
        doctopicsThreshold: [0.0, Validators.required],
        prefixCode: ["null", Validators.required],
        docTopicsMax: [-1, Validators.required], 
        randomSeed: [0, Validators.required],
        usePam: ["false", Validators.required],
        useNgrams: ["false", Validators.required],
        showTopicsInterval: [50, Validators.required],
        outputModelInterval: [0, Validators.required], 
        alpha: [50.0, Validators.required],
        outputStateInterval: [0, Validators.required],        
        optimizeInterval: [0, Validators.required], 
        beta: [0.01, Validators.required],
        optimizeBurnin: [200, Validators.required], 
        useSymmetricAlpha: ["false", Validators.required],
        gamma: [0.01, Validators.required], 
        delta: [0.03, Validators.required],
        delta1: [0.2, Validators.required],
        delta2: [1000.0, Validators.required], 
        pamNumSupertopics: [10, Validators.required],
        pamNumSubtopics: [20, Validators.required],  
        languageInput: ["null", Validators.required],
        testing: ["null", Validators.required], 
        outputModel: ["null", Validators.required],
        inputModel: ["null", Validators.required],
        evaluatorFilename: ["null", Validators.required], 
        outputState: ["null", Validators.required],
        outputTopicKeys: ["null", Validators.required],  
        topicWordWeightsFile: ["null", Validators.required],
        wordTopicCountsFile: ["null", Validators.required], 
        xmlTopicReport: ["null", Validators.required],
        xmlTopicPhraseReport: ["null", Validators.required],
        outputDocTopics: ["null", Validators.required]        
    });
    if (this.isLoading==false) {
      this.mallet.testtraintopicsConnection().subscribe(
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
    data.append("topicmodelFile", this.dataForm.get("topicmodelFile").value);
    data.append("inferencerFilename", this.dataForm.get("inferencerFilename").value);  
    data.append("numtopwords", this.dataForm.get("numtopwords").value);
    data.append("numTopics", this.dataForm.get("numTopics").value);  
    data.append("numThreads", this.dataForm.get("numThreads").value);
    data.append("numIterations", this.dataForm.get("numIterations").value);  
    data.append("doctopicsThreshold", this.dataForm.get("doctopicsThreshold").value);
    data.append("prefixCode", this.dataForm.get("prefixCode").value);
    data.append("docTopicsMax", this.dataForm.get("docTopicsMax").value); 
    data.append("randomSeed", this.dataForm.get("randomSeed").value);
    data.append("usePam", this.dataForm.get("usePam").value); 
    data.append("useNgrams", this.dataForm.get("useNgrams").value); 
    data.append("showTopicsInterval", this.dataForm.get("showTopicsInterval").value);
    data.append("outputModelInterval", this.dataForm.get("outputModelInterval").value);  
    data.append("alpha", this.dataForm.get("alpha").value);
    data.append("outputStateInterval", this.dataForm.get("outputStateInterval").value);
    data.append("optimizeInterval", this.dataForm.get("optimizeInterval").value);  
    data.append("beta", this.dataForm.get("beta").value);
    data.append("optimizeBurnin", this.dataForm.get("optimizeBurnin").value);  
    data.append("useSymmetricAlpha", this.dataForm.get("useSymmetricAlpha").value);
    data.append("gamma", this.dataForm.get("gamma").value);  
    data.append("delta", this.dataForm.get("delta").value);
    data.append("delta1", this.dataForm.get("delta1").value);
    data.append("delta2", this.dataForm.get("delta2").value);  
    data.append("pamNumSupertopics", this.dataForm.get("pamNumSupertopics").value);
    data.append("pamNumSubtopics", this.dataForm.get("pamNumSubtopics").value);      
    data.append("languageInput", this.dataForm.get("languageInput").value);
    data.append("testing", this.dataForm.get("testing").value);  
    data.append("outputModel", this.dataForm.get("outputModel").value);
    data.append("inputModel", this.dataForm.get("inputModel").value);  
    data.append("evaluatorFilename", this.dataForm.get("evaluatorFilename").value);
    data.append("outputState", this.dataForm.get("outputState").value);
    data.append("topicWordWeightsFile", this.dataForm.get("topicWordWeightsFile").value);  
    data.append("outputTopicKeys", this.dataForm.get("outputTopicKeys").value);
    data.append("wordTopicCountsFile", this.dataForm.get("wordTopicCountsFile").value);   
    data.append("xmlTopicReport", this.dataForm.get("xmlTopicReport").value);
    data.append("xmlTopicPhraseReport", this.dataForm.get("xmlTopicPhraseReport").value);  
    data.append("outputDocTopics", this.dataForm.get("outputDocTopics").value);
    this.submitted = true;
    this.isLoading = true;
    this.mallet.runtraintopics(data).subscribe(
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
