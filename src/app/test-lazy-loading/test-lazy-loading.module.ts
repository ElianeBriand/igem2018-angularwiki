import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule} from '@angular/material';

import { TestLazyLoadingRoutingModule } from './test-lazy-loading-routing.module';
import { ExampleDisplayComponent } from './example-display/example-display.component';

@NgModule({
  imports: [
    CommonModule,
    TestLazyLoadingRoutingModule,
    MatToolbarModule
  ],
  declarations: [ExampleDisplayComponent]
})
export class TestLazyLoadingModule { }
