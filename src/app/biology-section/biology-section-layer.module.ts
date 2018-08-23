import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BiologySectionComponent} from './biology-section.component';
import {BiologySectionRoutingModule} from './biology-section-routing.module';




import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatButtonModule, MatCardModule,
  MatIconModule, MatToolbarModule
} from '@angular/material';

import { MatExpansionModule } from '@angular/material/expansion';

import {StrainsComponent} from './strains/strains.component';
import {PartsComponent} from './parts/parts.component';

import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [
    CommonModule,
    BiologySectionRoutingModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTableModule
  ],
  declarations: [BiologySectionComponent,
    PartsComponent,
    StrainsComponent]
})
export class BiologySectionLayerModule { }
