import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css']
})
export class TeamRosterComponent implements OnInit {

  firstPanelOpen = true;
  constructor() { }

  ngOnInit() {
    this.firstPanelOpen = true;
  }

}
