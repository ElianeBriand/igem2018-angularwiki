import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TeamRosterComponent} from './team-roster.component';

import {TeamRosterRoutingModule} from './team-roster-routing.module';

import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatButtonModule, MatCardModule,
  MatIconModule
} from '@angular/material';




@NgModule({
  imports: [
    CommonModule,
    TeamRosterRoutingModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule
  ],
  declarations: [TeamRosterComponent]
})
export class TeamRosterLayerModule { }
