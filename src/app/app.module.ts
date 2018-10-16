import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  APP_INITIALIZER} from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';


import {AppComponent, WikiSourceSheet} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
   MatButtonModule,
  MatIconModule, MatListModule,
  MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatGridListModule
} from '@angular/material';

import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ComputingSectionComponent } from './computing-section/computing-section.component';
import { HumanPracticeSectionComponent } from './human-practice-section/human-practice-section.component';
import {PreInitLoaderService} from './pre-init-loader.service';
import {SharedPipeModule} from './shared-pipe.module';
import {ModelingComponent} from './modeling/modeling.component';
import {CollaborationsComponent} from './collaborations/collaborations.component';
import {ReferenceManagerService} from './reference-manager.service';
import {ReferenceBoxModule} from './reference-box/reference-box.module';
import {ReferencesPageComponent} from './references-page/references-page.component';
import {DemonstrateComponent} from './demonstrate/demonstrate.component';
import {SafetyComponent} from './safety/safety.component';
import {AchievementsComponent} from './achievements/achievements.component';

import {NgxPageScrollModule} from 'ngx-page-scroll';
import {BackgroundComponent} from './background/background.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectDetailsComponent,
    ComputingSectionComponent,
    HumanPracticeSectionComponent,
    ModelingComponent,
    CollaborationsComponent,
    ReferencesPageComponent,
    DemonstrateComponent,
    SafetyComponent,
    WikiSourceSheet,
    AchievementsComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    SharedPipeModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReferenceBoxModule,
    MatChipsModule,
    MatGridListModule,
    NgxPageScrollModule
  ],
  entryComponents: [
    WikiSourceSheet
  ],
  providers: [
    PreInitLoaderService,
    {
      provide: APP_INITIALIZER,
      useFactory: (preInitService: PreInitLoaderService) => function() {return preInitService.loadPageAtInit()},
      deps: [PreInitLoaderService],
      multi: true
    },
    ReferenceManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }

}
