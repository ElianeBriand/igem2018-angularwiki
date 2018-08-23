import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AttributionComponent} from './attribution.component';

import {AttributionRoutingModule} from './attribution-routing.module';



import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatButtonModule, MatCardModule,
  MatIconModule
} from '@angular/material';




@NgModule({
  imports: [
    CommonModule,
    AttributionRoutingModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule
  ],
  declarations: [AttributionComponent]
})
export class AttributionLayerModule { }
