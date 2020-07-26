import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinuxService {

  constructor(public http: HttpClient) { }

  //depsBuilder
  public testsedConnection():Observable<any>{    
    return this.http.get(environment.linux_sed_url + '/engine/linux'); 
  }

  public runsed(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/linux/sed',data);
    return this.http.post(environment.linux_sed_url + '/engine/linux/sed',data);
  }
}

