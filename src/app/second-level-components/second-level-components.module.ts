import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondLevelComponentsRoutingModule } from './second-level-components-routing.module';
import { LabNoteBookComponent } from './lab-note-book/lab-note-book.component';

@NgModule({
  imports: [
    CommonModule,
    SecondLevelComponentsRoutingModule
  ],
  declarations: [LabNoteBookComponent]
})
export class SecondLevelComponentsModule { }
