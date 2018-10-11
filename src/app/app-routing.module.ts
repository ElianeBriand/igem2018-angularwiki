import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {ComputingSectionComponent} from './computing-section/computing-section.component';
import {HumanPracticeSectionComponent} from './human-practice-section/human-practice-section.component';
import {ChunkGuardService} from './chunk-guard.service';
import {ModelingComponent} from './modeling/modeling.component';
import {CollaborationsComponent} from './collaborations/collaborations.component';
import {ReferencesPageComponent} from './references-page/references-page.component';
import {DemonstrateComponent} from './demonstrate/demonstrate.component';
import {SafetyComponent} from './safety/safety.component';
import {AchievementsComponent} from './achievements/achievements.component';


const routes: Routes = [
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
  { path: 'demonstrate', component: DemonstrateComponent, canActivate: [ChunkGuardService] },
  { path: 'safety', component: SafetyComponent, canActivate: [ChunkGuardService] },
  { path: 'references', component: ReferencesPageComponent, canActivate: [ChunkGuardService] },
  { path: 'achievements', component: AchievementsComponent, canActivate: [ChunkGuardService] },
  { path: 'support', loadChildren: './support-section/support-section-layer.module#SupportSectionLayerModule', canActivate: [ChunkGuardService] },
  { path: '', component: DashboardComponent, canActivate: [ChunkGuardService], pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
