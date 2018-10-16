import {AfterViewInit, Component, OnInit} from '@angular/core';







@Component({
  selector: 'app-cpg2',
  templateUrl: './cpg2.component.html',
  styleUrls: ['./cpg2.component.css']
})
export class Cpg2Component implements OnInit, AfterViewInit {



  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    try {
      document.querySelector('#top').scrollIntoView();
    } catch (e) { }
  }

}
