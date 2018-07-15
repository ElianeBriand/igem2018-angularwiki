import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WikiLightproxyComponent} from './wiki-lightproxy.component';

const routes: Routes = [
  { path: '', component: WikiLightproxyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiLightproxyRoutingModule { }
