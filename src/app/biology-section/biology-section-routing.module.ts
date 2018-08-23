import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BiologySectionComponent} from './biology-section.component';
import {PartsComponent} from './parts/parts.component';
import {StrainsComponent} from './strains/strains.component';

const routes: Routes = [
  { path: 'overview', component: BiologySectionComponent },
  { path: 'parts', component: PartsComponent },
  { path: 'strains', component: StrainsComponent },
  { path: '', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiologySectionRoutingModule { }
