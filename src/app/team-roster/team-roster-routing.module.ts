import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamRosterComponent} from './team-roster.component';

const routes: Routes = [
  { path: '', component: TeamRosterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRosterRoutingModule { }
