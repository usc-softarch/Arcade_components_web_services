import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MalletService  {  
 
  constructor(public http: HttpClient) { }

  //import-dir
  public testimportdirConnection():Observable<any>{    
    return this.http.get(environment.mallet_importdir_url + '/engine/mallet'); 
  }

  public runimportdir(data:any):Observable<any>{
    // return this.http.post('http://localhost:3012//engine/mallet/topicmodel',data);
    return this.http.post(environment.mallet_importdir_url + '/engine/mallet/topicmodel',data).pipe(timeout(2400000));
  }

  //train-topics
  public testtraintopicsConnection():Observable<any>{    
    return this.http.get(environment.mallet_traintopics_url + '/engine/mallet'); 
  }

  public runtraintopics(data:any):Observable<any>{    
    // return this.http.post('http://localhost:3012//engine/mallet/traintopics',data);
    return this.http.post(environment.mallet_traintopics_url + '/engine/mallet/traintopics',data).pipe(timeout(2400000));
  }

  //import-file
  public testimportfileConnection():Observable<any>{    
    return this.http.get(environment.mallet_importfile_url + '/engine/mallet'); 
  }

  public runimportfile(data:any):Observable<any>{
    // return this.http.post('http://localhost:3012//engine/mallet/importfile',data);
    return this.http.post(environment.mallet_importfile_url + '/engine/mallet/importfile',data).pipe(timeout(2400000));
  }

  //train-classifier
  public testtrainclassifierConnection():Observable<any>{    
    return this.http.get(environment.mallet_trainclassifier_url + '/engine/mallet'); 
  }

  public runtrainclassifier(data:any):Observable<any>{    
    // return this.http.post('http://localhost:3012//engine/mallet/trainclassifier',data);
    return this.http.post(environment.mallet_trainclassifier_url + '/engine/mallet/trainclassifier',data).pipe(timeout(2400000));
  }

  //infer-topics
  public testinfertopicsConnection():Observable<any>{    
    return this.http.get(environment.mallet_infertopics_url + '/engine/mallet'); 
  }

  public runinfertopics(data:any):Observable<any>{    
    // return this.http.post('http://localhost:3012//engine/mallet/infertopics',data);
    return this.http.post(environment.mallet_infertopics_url + '/engine/mallet/infertopics',data).pipe(timeout(2400000));
  }

  //hlda
  public testhldasConnection():Observable<any>{    
    return this.http.get(environment.mallet_hlda_url + '/engine/mallet'); 
  }

  public runhlda(data:any):Observable<any>{    
    // return this.http.post('http://localhost:3012//engine/mallet/hlda',data);
    return this.http.post(environment.mallet_hlda_url + '/engine/mallet/hlda',data).pipe(timeout(2400000));
  }

  //prune
  public testpruneConnection():Observable<any>{    
    return this.http.get(environment.mallet_prune_url + '/engine/mallet'); 
  }

  public runprune(data:any):Observable<any>{    
    // return this.http.post('http://localhost:3012//engine/mallet/prune',data);
    return this.http.post(environment.mallet_prune_url + '/engine/mallet/prune',data).pipe(timeout(2400000));
  }

  //prune
  public testsplitConnection():Observable<any>{    
    return this.http.get(environment.mallet_split_url + '/engine/mallet'); 
  }

  public runsplit(data:any):Observable<any>{    
    // return this.http.post('http://localhost:3012//engine/mallet/split',data);
    return this.http.post(environment.mallet_split_url + '/engine/mallet/split',data).pipe(timeout(2400000));
  }

}