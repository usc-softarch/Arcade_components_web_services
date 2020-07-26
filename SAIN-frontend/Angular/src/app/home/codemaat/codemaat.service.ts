import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CodeMaatService {  
 
  constructor(public http: HttpClient) { }

  //depsBuilder
  public testvcsConnection():Observable<any>{    
    return this.http.get(environment.codemaat_vcs_url + '/engine/codemaat'); 
  }

  public runvcs(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/codemaat/vcs',data);
    return this.http.post(environment.codemaat_vcs_url + '/engine/codemaat/vcs',data);
  }
  
}
