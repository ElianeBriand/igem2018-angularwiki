import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SanitizeHtml2Pipe, TeamRosterComponent} from './team-roster.component';

import {TeamRosterRoutingModule} from './team-roster-routing.module';

import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatButtonModule, MatCardModule, MatChipsModule,
  MatIconModule
} from '@angular/material';
import {SharedPipeModule} from '../shared-pipe.module';




@NgModule({
  imports: [
    CommonModule,
    TeamRosterRoutingModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatChipsModule
  ],
  declarations: [TeamRosterComponent,
    SanitizeHtml2Pipe],
  exports: [
    SanitizeHtml2Pipe
  ]
})
export class TeamRosterLayerModule { }
