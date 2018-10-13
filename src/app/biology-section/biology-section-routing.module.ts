import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BiologySectionComponent} from './biology-section.component';
import {PartsComponent} from './parts/parts.component';
import {StrainsComponent} from './strains/strains.component';
import {InterlabComponent} from './interlab/interlab.component';
import {Cpg2Component} from './parts/cpg2/cpg2.component';
import {FolCComponent} from './parts/fol-c/fol-c.component';
import {J23108Component} from './parts/j23108/j23108.component';
import {Lee5Component} from './parts/lee5/lee5.component';
import {LerComponent} from './parts/ler/ler.component';
import {MtxDegradationComponent} from './bio-details/mtx-degradation/mtx-degradation.component';
import {HeterogeniousComponent} from './bio-details/heterogenious/heterogenious.component';
import {HplcExplorerPageComponent} from './hplc-explorer-page/hplc-explorer-page.component';
import {PartsCollectionComponent} from './parts-collection/parts-collection.component';

const routes: Routes = [
  { path: 'overview', component: BiologySectionComponent },
  { path: 'parts', component: PartsComponent },
  { path: 'strains', component: StrainsComponent },
  { path: 'interlab', component: InterlabComponent },
  { path: 'cpg2', component: Cpg2Component },
  { path: 'folc', component: FolCComponent },
  { path: 'J23108', component: J23108Component },
  { path: 'lee5', component: Lee5Component },
  { path: 'ler', component: LerComponent },
  { path: 'mtx', component: MtxDegradationComponent },
  { path: 'hplc', component: HplcExplorerPageComponent },
  { path: 'parts-collection', component: PartsCollectionComponent },
  { path: 'heterogenious', component: HeterogeniousComponent },
  { path: '', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiologySectionRoutingModule { }
