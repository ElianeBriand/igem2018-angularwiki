import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {SupportSectionComponent} from './support-section.component';
import {SupportSectionRoutingModule} from './support-section-routing.module';

import {LayoutModule} from '@angular/cdk/layout';

import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatButtonModule, MatCardModule,
  MatIconModule, MatListModule,
  MatMenuModule,
  MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';




@NgModule({
  imports: [
    CommonModule,
    SupportSectionRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatCardModule,
    MatMenuModule
  ],
  declarations: [SupportSectionComponent]
})
export class SupportSectionLayerModule { }
