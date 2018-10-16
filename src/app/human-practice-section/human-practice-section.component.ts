import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-human-practice-section',
  templateUrl: './human-practice-section.component.html',
  styleUrls: ['./human-practice-section.component.css']
})
export class HumanPracticeSectionComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

}
