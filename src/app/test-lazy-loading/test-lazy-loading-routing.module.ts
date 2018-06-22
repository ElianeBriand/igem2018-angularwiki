import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExampleDisplayComponent} from './example-display/example-display.component';

const routes: Routes = [
  { path: '', component: ExampleDisplayComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestLazyLoadingRoutingModule { }
