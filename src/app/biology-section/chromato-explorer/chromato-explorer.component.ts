import { Component, OnInit } from '@angular/core';
import {HPLC_GROUPS_RECORD} from '../hplc_records';

@Component({
  selector: 'app-chromato-explorer',
  templateUrl: './chromato-explorer.component.html',
  styleUrls: ['./chromato-explorer.component.css']
})
export class ChromatoExplorerComponent implements OnInit {


  HPLCgrouping = HPLC_GROUPS_RECORD;
  selected1: string;
  selected2: string;
  selected3: string;

  constructor() { }

  ngOnInit() {
  }

}
