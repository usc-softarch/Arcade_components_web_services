import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { HeaderOneComponent } from './home/header/header-one/header-one.component';
import { HeaderTwoComponent } from './home/header/header-two/header-two.component';
import { AccountComponent } from './home/account/account.component';
import { LoginComponent } from './home/account/login/login.component';
import { RegisterComponent } from './home/account/register/register.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { ArcadeDepsBuilderComponent } from './home/arcade/arcade-depsbuilder/arcade-depsbuilder.component';
import { AuthenticationService } from './authentication.service'
import {AuthGuardService} from './auth-guard.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { FooterComponent } from './home/header/footer/footer.component';
import { ArcadeAcdcComponent } from './home/arcade/arcade-acdc/arcade-acdc.component';
import { ComponentsListComponent } from './home/components-list/components-list.component';
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

@NgModule({
  declarations: [    

    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeaderOneComponent,
    HeaderTwoComponent,
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    ArcadeDepsBuilderComponent,
    LoadingSpinnerComponent,
    FooterComponent,
    ArcadeAcdcComponent,
    ComponentsListComponent,
    ArcadeArchsmelldetectorComponent,
    ArcadePkgComponent,
    ArcadeA2aComponent,
    ArcadeCvgComponent,
    ArcadeC2caverageanalyzeComponent,
    ArcadeDecaymetricsComponent,
    ArcadeSmelldensitianalyzerComponent,
    ArcadeSmellevolutionanalyzerComponent,
    ArcadePipeextractorComponent,
    MalletImportdirComponent,
    MalletTraintopicsComponent,
    ArcadeArcComponent,
    MalletImportfileComponent,
    MalletTrainclassifierComponent,
    MalletInfertopicsComponent,
    MalletHldaComponent,
    MalletPruneComponent,
    MalletSplitComponent,
    CodemaatVcsComponent,
    GitLogComponent,
    LinuxSedComponent,
    ArcadeCleanupcodemaatComponent,
    ArcadeBatchclonefinderComponent,
    ArcadeDepfindrunnerComponent,
    ArcadeDependencyfinderprocessingComponent,],
    
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
  ],

  providers: [AuthenticationService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
