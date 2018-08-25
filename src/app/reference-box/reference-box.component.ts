import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference-box',
  templateUrl: './reference-box.component.html',
  styleUrls: ['./reference-box.component.css']
})
export class ReferenceBoxComponent implements OnInit {

  public testString = "A";

  constructor() { }

  ngOnInit() {
  }

}
