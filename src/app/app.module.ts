import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  APP_INITIALIZER} from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule,
  MatCardModule, MatMenuModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { DashboardComponent } from './dashboard/dashboard.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { BiologySectionComponent } from './biology-section/biology-section.component';
import { ComputingSectionComponent } from './computing-section/computing-section.component';
import { HumanPracticeSectionComponent } from './human-practice-section/human-practice-section.component';
import {PreInitLoaderService} from './pre-init-loader.service';
import {SharedPipeModule} from './shared-pipe.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SitemapComponent,
    ProjectDetailsComponent,
    BiologySectionComponent,
    ComputingSectionComponent,
    HumanPracticeSectionComponent,

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
    SharedPipeModule

  ],
  providers: [
    PreInitLoaderService,
    {
      provide: APP_INITIALIZER,
      useFactory: (preInitService: PreInitLoaderService) => function() {return preInitService.loadPageAtInit()},
      deps: [PreInitLoaderService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
