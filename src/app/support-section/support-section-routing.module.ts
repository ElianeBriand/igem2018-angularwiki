import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SupportSectionComponent} from './support-section.component';

const routes: Routes = [
  { path: '', component: SupportSectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportSectionRoutingModule { }
