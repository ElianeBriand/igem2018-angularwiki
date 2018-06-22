import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LabNoteBookComponent} from './lab-note-book/lab-note-book.component';

const routes: Routes = [
  { path: 'labnotebook', component: LabNoteBookComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondLevelComponentsRoutingModule { }
