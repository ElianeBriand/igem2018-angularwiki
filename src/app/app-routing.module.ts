import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SitemapComponent} from './sitemap/sitemap.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {BiologySectionComponent} from './biology-section/biology-section.component';
import {ComputingSectionComponent} from './computing-section/computing-section.component';
import {HumanPracticeSectionComponent} from './human-practice-section/human-practice-section.component';
import {ChunkGuardService} from './chunk-guard.service';
import {ModelingComponent} from './modeling/modeling.component';
import {PartsComponent} from './biology-section/parts/parts.component';
import {CollaborationsComponent} from './collaborations/collaborations.component';
import {StrainsComponent} from './biology-section/strains/strains.component';
import {ReferencesPageComponent} from './references-page/references-page.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [ChunkGuardService]},
  { path: 'sitemap', component: SitemapComponent, canActivate: [ChunkGuardService]},
  { path: 'labnotebook/:pagepath', loadChildren: './wiki-lightproxy/wiki-lightproxy-layer.module#WikiLightproxyLayerModule', canActivate: [ChunkGuardService] },
  { path: 'labnotebook', loadChildren: './wiki-lightproxy/wiki-lightproxy-layer.module#WikiLightproxyLayerModule', canActivate: [ChunkGuardService] },
  { path: 'team', loadChildren: './team-roster/team-roster-layer.module#TeamRosterLayerModule', canActivate: [ChunkGuardService] },
  { path: 'attribution', loadChildren: './attribution/attribution-layer.module#AttributionLayerModule', canActivate: [ChunkGuardService] },
  { path: 'project', component: ProjectDetailsComponent, canActivate: [ChunkGuardService] },
  { path: 'biology', loadChildren: './biology-section/biology-section-layer.module#BiologySectionLayerModule', canActivate: [ChunkGuardService] },
  { path: 'software', component: ComputingSectionComponent, canActivate: [ChunkGuardService] },
  { path: 'modeling', component: ModelingComponent, canActivate: [ChunkGuardService] },
  { path: 'human-practices', component: HumanPracticeSectionComponent, canActivate: [ChunkGuardService] },
  { path: 'collaborations', component: CollaborationsComponent, canActivate: [ChunkGuardService] },
  { path: 'references', component: ReferencesPageComponent, canActivate: [ChunkGuardService] },
  { path: 'support', loadChildren: './support-section/support-section-layer.module#SupportSectionLayerModule', canActivate: [ChunkGuardService] },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
