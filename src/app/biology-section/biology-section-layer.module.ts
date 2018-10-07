import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BiologySectionComponent} from './biology-section.component';
import {BiologySectionRoutingModule} from './biology-section-routing.module';




import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatButtonModule, MatCardModule,
  MatIconModule, MatListModule
} from '@angular/material';

import { MatExpansionModule } from '@angular/material/expansion';

import {StrainsComponent} from './strains/strains.component';
import {PartsComponent} from './parts/parts.component';

import {MatTableModule} from '@angular/material/table';
import {ReferenceBoxModule} from '../reference-box/reference-box.module';
import {InterlabComponent} from './interlab/interlab.component';
import { J23108Component } from './parts/j23108/j23108.component';
import { Cpg2Component } from './parts/cpg2/cpg2.component';
import { FolCComponent } from './parts/fol-c/fol-c.component';
import { LerComponent } from './parts/ler/ler.component';
import { Lee5Component } from './parts/lee5/lee5.component';
import { MtxDegradationComponent } from './bio-details/mtx-degradation/mtx-degradation.component';
import { HeterogeniousComponent } from './bio-details/heterogenious/heterogenious.component';


@NgModule({
  imports: [
    CommonModule,
    BiologySectionRoutingModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    ReferenceBoxModule,
    MatListModule
  ],
  declarations: [
    BiologySectionComponent,
    PartsComponent,
    StrainsComponent,
    InterlabComponent,
    J23108Component,
    Cpg2Component,
    FolCComponent,
    LerComponent,
    Lee5Component,
    MtxDegradationComponent,
    HeterogeniousComponent
  ]
})
export class BiologySectionLayerModule { }
