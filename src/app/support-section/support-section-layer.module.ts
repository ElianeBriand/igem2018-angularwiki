import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {SupportSectionComponent} from './support-section.component';
import {SupportSectionRoutingModule} from './support-section-routing.module';


import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatButtonModule, MatCardModule,
  MatIconModule
} from '@angular/material';




@NgModule({
  imports: [
    CommonModule,
    SupportSectionRoutingModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule
  ],
  declarations: [SupportSectionComponent]
})
export class SupportSectionLayerModule { }
