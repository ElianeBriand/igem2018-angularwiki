import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SitemapComponent} from './sitemap/sitemap.component';
import {WikiLightproxyComponent} from './wiki-lightproxy/wiki-lightproxy.component';
import {TeamRosterComponent} from './team-roster/team-roster.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {BiologySectionComponent} from './biology-section/biology-section.component';
import {ComputingSectionComponent} from './computing-section/computing-section.component';
import {HumanPracticeSectionComponent} from './human-practice-section/human-practice-section.component';
import {SupportSectionComponent} from './support-section/support-section.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: 'wiki-lp/:pagepath', component: WikiLightproxyComponent },
  { path: 'wiki-lp', component: WikiLightproxyComponent },
  { path: 'team', component: TeamRosterComponent },
  { path: 'project', component: ProjectDetailsComponent },
  { path: 'biology', component: BiologySectionComponent },
  { path: 'computing', component: ComputingSectionComponent },
  { path: 'human-practices', component: HumanPracticeSectionComponent },
  { path: 'support', component: SupportSectionComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
