import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReferenceBoxComponent, ReferenceSheet} from './reference-box.component';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatIconModule,MatChipsModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReferenceManagerService} from '../reference-manager.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatBottomSheetModule,
    MatChipsModule
  ],
  entryComponents: [
    ReferenceSheet
  ],
  declarations: [
    ReferenceBoxComponent,
    ReferenceSheet
  ],
  exports : [
    ReferenceBoxComponent
  ],
  providers: [
    ReferenceManagerService
  ]
})
export class ReferenceBoxModule { }
