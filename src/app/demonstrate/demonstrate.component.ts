import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-demonstrate',
  templateUrl: './demonstrate.component.html',
  styleUrls: ['./demonstrate.component.css']
})
export class DemonstrateComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
