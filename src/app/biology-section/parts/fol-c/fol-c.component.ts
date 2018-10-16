import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fol-c',
  templateUrl: './fol-c.component.html',
  styleUrls: ['./fol-c.component.css']
})
export class FolCComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    try {
      document.querySelector('#top').scrollIntoView();
    } catch (e) { }
  }

}
