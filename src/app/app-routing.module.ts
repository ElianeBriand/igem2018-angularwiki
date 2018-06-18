import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SitemapComponent} from './sitemap/sitemap.component';
import {WikiLightproxyComponent} from './wiki-lightproxy/wiki-lightproxy.component';
import {TeamRosterComponent} from './team-roster/team-roster.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: 'wiki-lp/:pagepath', component: WikiLightproxyComponent },
  { path: 'wiki-lp', component: WikiLightproxyComponent },
  { path: 'team', component: TeamRosterComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
