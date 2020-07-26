import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(public http: HttpClient) { }

  //depsBuilder
  public testgitlogConnection():Observable<any>{    
    return this.http.get(environment.git_log_url + '/engine/git'); 
  }

  public rungitlog(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/git/log',data);
    return this.http.post(environment.git_log_url + '/engine/git/log',data);
  }
}
