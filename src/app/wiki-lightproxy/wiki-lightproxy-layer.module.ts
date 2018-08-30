import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {WikiLightproxyComponent} from './wiki-lightproxy.component';

import {WikiLightproxyRoutingModule} from './wiki-lightproxy-routing.module';


import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatButtonModule, MatCardModule, MatDatepickerModule, MatExpansionModule,
  MatIconModule, MatInputModule, MatListModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import {SharedPipeModule} from '../shared-pipe.module';
import {CalendarModule} from 'angular-calendar';
import {CalendarHeaderComponent} from './calendar-header.components';
import {LabnotebookCalEventService} from './event-service/labnotebook-cal-event.service';





@NgModule({
  imports: [
    CommonModule,
    WikiLightproxyRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    MatMenuModule,
    SharedPipeModule,
    CalendarModule.forRoot(),
    MatExpansionModule,

  ],
  declarations: [
    WikiLightproxyComponent,
    CalendarHeaderComponent
  ],
  providers: [
    LabnotebookCalEventService
  ]

})
export class WikiLightproxyLayerModule { }
