import { Component, OnInit, Renderer2 } from '@angular/core';

export interface BiobrickRecord {
  symbol: string;
  bbnumber: string;
  registrylink: string;
}

const BISTABLE_OLDER_BIOBRICK: BiobrickRecord[] = [
  {symbol: "RBS GFP", bbnumber: "BBa_E0240", registrylink: "http://parts.igem.org/Part:BBa_E0240"},
  {symbol: "tetO promoter", bbnumber: "BBa_R0040", registrylink: "http://parts.igem.org/Part:BBa_R0040"},
  {symbol: "RBS (Elowitz)", bbnumber: "BBa_B0034", registrylink: "http://parts.igem.org/Part:BBa_B0034"}

];

const MTX_OLDER_BIOBRICK: BiobrickRecord[] = [
  {symbol: "tetO promoter", bbnumber: "BBa_R0040", registrylink: "http://parts.igem.org/Part:BBa_R0040"},
  {symbol: "lacO promoter", bbnumber: "BBa_R0011", registrylink: "http://parts.igem.org/Part:BBa_R0011"},
  {symbol: "araO promoter", bbnumber: "BBa_K808000", registrylink: "http://parts.igem.org/Part:BBa_K808000"},
  {symbol: "RBS (Elowitz)", bbnumber: "BBa_B0034", registrylink: "http://parts.igem.org/Part:BBa_B0034"},
  {symbol: "Terminator T1", bbnumber: "BBa_B0010", registrylink: "http://parts.igem.org/Part:BBa_B0010"},
  {symbol: "Artificial terminator 90%", bbnumber: "BBa_B1006", registrylink: "http://parts.igem.org/Part:BBa_B1006"}
];

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {

  displayedColumns: string[] = ['symbol', 'bbnumber'];
  datasource_bistable = BISTABLE_OLDER_BIOBRICK;
  datasource_MTX = MTX_OLDER_BIOBRICK;


  constructor(private renderer2: Renderer2) { }

  ngOnInit() {
  }


  mouseenter (event) {
    this.renderer2.addClass(event.target, 'mat-elevation-z5')
  }

  mouseleave (event) {
    this.renderer2.removeClass(event.target, 'mat-elevation-z5')
  }

}
