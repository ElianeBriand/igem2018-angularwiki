import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  APP_INITIALIZER} from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule,
  MatCardModule, MatMenuModule, MatBottomSheetModule, MatChipsModule, MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule
} from '@angular/material';

import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';


import { DashboardComponent } from './dashboard/dashboard.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ComputingSectionComponent } from './computing-section/computing-section.component';
import { HumanPracticeSectionComponent } from './human-practice-section/human-practice-section.component';
import {PreInitLoaderService} from './pre-init-loader.service';
import {SharedPipeModule} from './shared-pipe.module';
import {ModelingComponent} from './modeling/modeling.component';
import {CollaborationsComponent} from './collaborations/collaborations.component';
import {ReferenceBoxComponent, ReferenceSheet} from './reference-box/reference-box.component';
import {ReferencesPageComponent} from './references-page/references-page.component';
import {ReferenceManagerService} from './reference-manager.service';
import {CalendarModule} from 'angular-calendar';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SitemapComponent,
    ProjectDetailsComponent,
    ComputingSectionComponent,
    HumanPracticeSectionComponent,
    ModelingComponent,
    CollaborationsComponent,
    ReferenceBoxComponent,
    ReferenceSheet,
    ReferencesPageComponent
  ],
  entryComponents: [
    ReferenceSheet
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    SharedPipeModule,
    NgMaterialMultilevelMenuModule,
    MatBottomSheetModule,
    MatChipsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule

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
