import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatTableModule, MatSortModule, MatGridListModule,
  MatCardModule, MatMenuModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import {SanitizeHtmlPipe} from './wiki-lightproxy/dummy-sanitizer';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { WikiLightproxyComponent } from './wiki-lightproxy/wiki-lightproxy.component';
import { TeamRosterComponent } from './team-roster/team-roster.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { BiologySectionComponent } from './biology-section/biology-section.component';
import { ComputingSectionComponent } from './computing-section/computing-section.component';
import { HumanPracticeSectionComponent } from './human-practice-section/human-practice-section.component';
import {RouteInterceptor} from './route-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SitemapComponent,
    WikiLightproxyComponent,
    SanitizeHtmlPipe,
    TeamRosterComponent,
    ProjectDetailsComponent,
    BiologySectionComponent,
    ComputingSectionComponent,
    HumanPracticeSectionComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatExpansionModule,
    FormsModule,
    MatInputModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
