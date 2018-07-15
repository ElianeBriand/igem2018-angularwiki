import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import {SanitizeHtmlPipe} from './wiki-lightproxy/dummy-sanitizer';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ SanitizeHtmlPipe  ],
  exports:      [ SanitizeHtmlPipe ]
})
export class SharedPipeModule { }
