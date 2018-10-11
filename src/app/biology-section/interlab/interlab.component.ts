import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


export interface DeviceUsed {
  device: string;
  partNumber: string;
  location: string;
}


const PARTS_DATA: DeviceUsed[] = [
  {device: "Negative control", partNumber: "BBa_R0040", location: "Well 2D"},
  {device: "Positive control", partNumber: "BBa_I20270", location: "Well 2B"},
  {device: "Test Device 2", partNumber: "BBa_J364001", location: "Well 2F"},
  {device: "Test Device 1", partNumber: "BBa_J364000", location: "Well 2H"},
  {device: "Test Device 3", partNumber: "BBa_J364002", location: "Well 2J"},
  {device: "Test Device 4", partNumber: "BBa_J364007", location: "Well 2L"},
  {device: "Test Device 5", partNumber: "BBa_J364008", location: "Well 2N"},
  {device: "Test Device 6", partNumber: "BBa_J364009", location: "Well 2P"}
];




@Component({
  selector: 'app-interlab',
  templateUrl: './interlab.component.html',
  styleUrls: ['./interlab.component.css']
})
export class InterlabComponent implements OnInit, AfterViewInit  {

  displayedColumns_partsused: string[] = ['device', 'partnumber',  'location'];
  dataSource_partsused = PARTS_DATA;


  private fragment: string;

  constructor(public router: Router, private route: ActivatedRoute) { }


  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }


}
