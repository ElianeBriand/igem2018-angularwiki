import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {AttributionComponent} from './attribution.component';


const routes: Routes = [
  { path: '', component: AttributionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttributionRoutingModule { }
