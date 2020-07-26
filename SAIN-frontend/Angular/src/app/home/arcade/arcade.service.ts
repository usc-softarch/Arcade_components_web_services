import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArcadeService {  
 
  constructor(public http: HttpClient) { }

  //depsBuilder
  public testdepsBuilderConnection():Observable<any>{    
    return this.http.get(environment.arcade_depsbuilder_url + '/engine/arcade'); 
  }

  public rundepsBuilder(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/arcade/depsBuilder',data);
    return this.http.post(environment.arcade_depsbuilder_url + '/engine/arcade/depsBuilder',data);
  }

  //acdc
  public testAcdcConnection():Observable<any>{    
    return this.http.get(environment.arcade_acdc_url + '/engine/arcade'); 
  }

  public runAcdc(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/arcade/acdc',data);
    return this.http.post(environment.arcade_acdc_url + '/engine/arcade/acdc',data);
  }
  
  //archsmelldetector
  public testArchsmelldetectorConnection():Observable<any>{    
    return this.http.get(environment.arcade_archsmelldetector_url + '/engine/arcade'); 
  }

  public runArchsmelldetector(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/arcade/archsmelldetector',data);
    return this.http.post(environment.arcade_archsmelldetector_url + '/engine/arcade/archsmelldetector',data);
  }

  //arc
  public testArcConnection():Observable<any>{    
    return this.http.get(environment.arcade_arc_url + '/engine/arcade'); 
  }

  public runArc(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/arcade/arc',data);
    return this.http.post(environment.arcade_arc_url + '/engine/arcade/arc',data);
  }

  //pkg
  public testPkgConnection():Observable<any>{    
    return this.http.get(environment.arcade_pkg_url + '/engine/arcade'); 
  }

  public runPkg(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/arcade/pkg',data);
    return this.http.post(environment.arcade_pkg_url + '/engine/arcade/pkg',data);
  }

  //a2a
  public testA2aConnection():Observable<any>{    
    return this.http.get(environment.arcade_a2a_url + '/engine/arcade'); 
  }

  public runA2a(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/arcade/a2a',data);
    return this.http.post(environment.arcade_a2a_url + '/engine/arcade/a2a',data);
  }

  //cvg
  public testCvgConnection():Observable<any>{    
    return this.http.get(environment.arcade_cvg_url + '/engine/arcade'); 
  }

  public runCvg(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/arcade/cvg',data);
    return this.http.post(environment.arcade_cvg_url + '/engine/arcade/cvg',data);
  }

  //c2caverageanalyze
  public testC2cAverageAnalyzeConnection():Observable<any>{    
    return this.http.get(environment.arcade_c2caverageanalyze_url + '/engine/arcade'); 
  }

  public runC2cAverageAnalyze(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/arcade/c2caverageanalyze',data);
    return this.http.post(environment.arcade_c2caverageanalyze_url + '/engine/arcade/c2caverageanalyze',data);
  }

  //decaymetrics
  public testDecaymetricsConnection():Observable<any>{    
    return this.http.get(environment.arcade_decaymetrics_url + '/engine/arcade'); 
  }

  public runDecaymetrics(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/arcade/decaymetrics',data);
    return this.http.post(environment.arcade_decaymetrics_url + '/engine/arcade/decaymetrics',data);
  }

  //smelldensityanalyzer
  public testSmellDensityAnalyzerConnection():Observable<any>{    
    return this.http.get(environment.arcade_smelldensityanalyzer_url + '/engine/arcade'); 
  }

  public runSmellDensityAnalyzer(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/arcade/smelldensityanalyzer',data);
    return this.http.post(environment.arcade_smelldensityanalyzer_url + '/engine/arcade/smelldensityanalyzer',data);
  }

  //smellevolutionanalyzer
  public testSmellEvolutionAnalyzerConnection():Observable<any>{    
    return this.http.get(environment.arcade_smellevolutionanalyzer_url + '/engine/arcade'); 
  }

  public runSmellEvolutionAnalyzer(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/arcade/smellevolutionanalyzer',data);
    return this.http.post(environment.arcade_smellevolutionanalyzer_url + '/engine/arcade/smellevolutionanalyzer',data);
  }

  //pipeextractor
  public testPipeExtractorConnection():Observable<any>{    
    return this.http.get(environment.arcade_pipeextractor_url + '/engine/arcade'); 
  }

  public runPipeExtractor(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/arcade/pipeextractor',data);
    return this.http.post(environment.arcade_pipeextractor_url + '/engine/arcade/pipeextractor',data);
  }

  //cleanupcodemaat
  public tesCleanupCodeMaatConnection():Observable<any>{    
    return this.http.get(environment.arcade_cleanupcodemaat_url + '/engine/arcade'); 
  }

  public runCleanupCodeMaat(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/arcade/cleanupcodemaat',data);
    return this.http.post(environment.arcade_cleanupcodemaat_url + '/engine/arcade/cleanupcodemaat',data);
  }

  //batchclonefinder
  public tesbatchCloneFinderConnection():Observable<any>{    
    return this.http.get(environment.arcade_batchclonefinder_url + '/engine/arcade'); 
  }

  public runbatchCloneFinder(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/arcade/batchclonefinder',data);
    return this.http.post(environment.arcade_batchclonefinder_url + '/engine/arcade/batchclonefinder',data);
  }

  //depfindrunner
  public testdepFindRunnerConnection():Observable<any>{    
    return this.http.get(environment.arcade_depfindrunner_url + '/engine/arcade'); 
  }

  public rundepFindRunner(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/arcade/depfindrunner',data);
    return this.http.post(environment.arcade_depfindrunner_url + '/engine/arcade/depfindrunner',data).pipe(timeout(3600000));    
  }

  //dependencyfinderprocessing
  public testdependencyFinderProcessingConnection():Observable<any>{    
    return this.http.get(environment.arcade_dependencyfinderprocessing_url + '/engine/arcade'); 
  }

  public rundependencyFinderProcessing(data:any):Observable<any>{
    // return this.http.post('http://localhost:3000/engine/arcade/dependencyfinderprocessing',data);
    return this.http.post(environment.arcade_dependencyfinderprocessing_url + '/engine/arcade/dependencyfinderprocessing',data);    
  }
}
