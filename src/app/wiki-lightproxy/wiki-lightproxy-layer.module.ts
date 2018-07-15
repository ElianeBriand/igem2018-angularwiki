import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {WikiLightproxyComponent} from './wiki-lightproxy.component';

import {WikiLightproxyRoutingModule} from './wiki-lightproxy-routing.module';


import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatButtonModule, MatCardModule,
  MatIconModule, MatListModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import {SharedPipeModule} from '../shared-pipe.module';





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
    SharedPipeModule
  ],
  declarations: [WikiLightproxyComponent]
})
export class WikiLightproxyLayerModule { }
