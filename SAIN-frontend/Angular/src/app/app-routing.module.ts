import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './home/account/login/login.component';
import { RegisterComponent } from './home/account/register/register.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { ArcadeDepsBuilderComponent } from './home/arcade/arcade-depsbuilder/arcade-depsbuilder.component';
import { ComponentsListComponent } from './home/components-list/components-list.component';
import { ArcadeAcdcComponent } from './home/arcade/arcade-acdc/arcade-acdc.component';
import { ArcadeArchsmelldetectorComponent } from './home/arcade/arcade-archsmelldetector/arcade-archsmelldetector.component';
import { ArcadePkgComponent } from './home/arcade/arcade-pkg/arcade-pkg.component';
import { ArcadeA2aComponent } from './home/arcade/arcade-a2a/arcade-a2a.component';
import { ArcadeCvgComponent } from './home/arcade/arcade-cvg/arcade-cvg.component';
import { ArcadeC2caverageanalyzeComponent } from './home/arcade/arcade-c2caverageanalyze/arcade-c2caverageanalyze.component';
import { ArcadeDecaymetricsComponent } from './home/arcade/arcade-decaymetrics/arcade-decaymetrics.component';
import { ArcadeSmelldensitianalyzerComponent } from './home/arcade/arcade-smelldensitianalyzer/arcade-smelldensitianalyzer.component';
import { ArcadeSmellevolutionanalyzerComponent } from './home/arcade/arcade-smellevolutionanalyzer/arcade-smellevolutionanalyzer.component';
import { ArcadePipeextractorComponent } from './home/arcade/arcade-pipeextractor/arcade-pipeextractor.component';
import { MalletImportdirComponent } from './home/mallet/mallet-importdir/mallet-importdir.component';
import { MalletTraintopicsComponent } from './home/mallet/mallet-traintopics/mallet-traintopics.component';
import { ArcadeArcComponent } from './home/arcade/arcade-arc/arcade-arc.component';
import { MalletImportfileComponent } from './home/mallet/mallet-importfile/mallet-importfile.component';
import { MalletTrainclassifierComponent } from './home/mallet/mallet-trainclassifier/mallet-trainclassifier.component';
import { MalletInfertopicsComponent } from './home/mallet/mallet-infertopics/mallet-infertopics.component';
import { MalletHldaComponent } from './home/mallet/mallet-hlda/mallet-hlda.component';
import { MalletPruneComponent } from './home/mallet/mallet-prune/mallet-prune.component';
import { MalletSplitComponent } from './home/mallet/mallet-split/mallet-split.component';
import { CodemaatVcsComponent } from './home/codemaat/codemaat-vcs/codemaat-vcs.component';
import { GitLogComponent } from './home/git/git-log/git-log.component';
import { LinuxSedComponent } from './home/linux/linux-sed/linux-sed.component';
import { ArcadeCleanupcodemaatComponent } from './home/arcade/arcade-cleanupcodemaat/arcade-cleanupcodemaat.component';
import { ArcadeBatchclonefinderComponent } from './home/arcade/arcade-batchclonefinder/arcade-batchclonefinder.component';
import { ArcadeDepfindrunnerComponent } from './home/arcade/arcade-depfindrunner/arcade-depfindrunner.component';
import { ArcadeDependencyfinderprocessingComponent } from './home/arcade/arcade-dependencyfinderprocessing/arcade-dependencyfinderprocessing.component';



const routes: Routes = [
  //-------------Home page ------------------------
  { path: '', redirectTo: '/componentslist', pathMatch: 'full' },
  { path: 'componentslist', component:ComponentsListComponent },  
  { path: 'contactus', component:ContactUsComponent },
  //-------------Account ---------------------------
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //-------------Arcade Components ---------------------------
  { path: 'arcade-depsbuilder', component:ArcadeDepsBuilderComponent },
  { path: 'arcade-acdc', component:ArcadeAcdcComponent },
  { path: 'arcade-archsmelldetector', component:ArcadeArchsmelldetectorComponent },  
  { path: 'arcade-arc', component:ArcadeArcComponent },
  { path: 'arcade-pkg', component:ArcadePkgComponent },  
  { path: 'arcade-a2a', component:ArcadeA2aComponent },  
  { path: 'arcade-cvg', component:ArcadeCvgComponent },  
  { path: 'arcade-c2caverageanalyze', component:ArcadeC2caverageanalyzeComponent }, 
  { path: 'arcade-decaymetrics', component:ArcadeDecaymetricsComponent },
  { path: 'arcade-smelldensityanalyzer', component:ArcadeSmelldensitianalyzerComponent },
  { path: 'arcade-smellevolutionanalyzer', component:ArcadeSmellevolutionanalyzerComponent },
  { path: 'arcade-pipeextractor', component:ArcadePipeextractorComponent },
  { path: 'arcade-cleanupcodemaat', component:ArcadeCleanupcodemaatComponent },
  { path: 'arcade-batchclonefinder', component:ArcadeBatchclonefinderComponent },
  { path: 'arcade-depfindrunner', component:ArcadeDepfindrunnerComponent },
  { path: 'arcade-dependencyfinderprocessing', component:ArcadeDependencyfinderprocessingComponent },
 
  //-------------Mallet Components ---------------------------
  { path: 'mallet-importdir', component:MalletImportdirComponent },
  { path: 'mallet-traintopics', component:MalletTraintopicsComponent },
  { path: 'mallet-importfile', component:MalletImportfileComponent },
  { path: 'mallet-trainclassifier', component:MalletTrainclassifierComponent },
  { path: 'mallet-infertopics', component:MalletInfertopicsComponent },
  { path: 'mallet-hlda', component:MalletHldaComponent },
  { path: 'mallet-prune', component:MalletPruneComponent },
  { path: 'mallet-split', component:MalletSplitComponent },

  //-------------CodeMaat Components ---------------------------
  { path: 'codemaat-vcs', component:CodemaatVcsComponent },

  //-------------Git Components ---------------------------
  { path: 'git-log', component:GitLogComponent },

  //-------------Linux Components ---------------------------
  { path: 'linux-sed', component:LinuxSedComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
