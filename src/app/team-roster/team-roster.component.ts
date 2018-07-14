import { Component, OnInit, AfterViewInit } from '@angular/core';


import {
  Input
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export class TeamMember {
  public name: string;
  public image_src: string;
  public bio: string;
  public expanded;
  public expanded_bool;
  public expanded_bio: string;

  constructor(name: string, image_src: string, bio: string, expanded_bio: string) {
    this.name = name;
    this.image_src = image_src;
    this.bio = bio;
    this.expanded = 'inactive';
    this.expanded_bool = false;
    this.expanded_bio = expanded_bio;
  }

  toggleState() {
    this.expanded_bool = !this.expanded_bool;
    this.expanded = this.expanded === 'active' ? 'inactive' : 'active';
  }
}

@Component({
  selector: 'app-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css'],
  animations: [
    trigger('cardState', [
      state('inactive', style({
      })),
      state('active',   style({
      })),
      transition('inactive => active', [
        style({transform: 'translateY(100%)'}),
        animate('200ms ease-in')
      ]),
      transition('active => inactive', [
        style({transform: 'translateY(-20%)'}),
        animate('200ms ease-out')
      ])
    ])
  ]
})
export class TeamRosterComponent implements OnInit, AfterViewInit {


  membersList = [
    new TeamMember("Kenn P.",
      "http://2018.igem.org/wiki/images/4/4e/T--GO_Paris-Saclay--placeholder_no_text.png",
      "Very productive, innovating, he can take decisions and he did so many things for our team: Searching Sponsor, Biology, Collaboration ! And behind iGEM, he is a big fan of windsurfing, and loves the sea !",
      "Hohoho"),
    new TeamMember("Guillaume G.",
      "http://2018.igem.org/wiki/images/4/4e/T--GO_Paris-Saclay--placeholder_no_text.png",
      "Our second mathematician ! He knew nothing about biology before iGEM but now, he loves that ! He can spend hours to solve problems. And after iGEM ? Mountains and plays the violin. ",
      ""),
    new TeamMember("Raphael G.",
      "http://2018.igem.org/wiki/images/4/4e/T--GO_Paris-Saclay--placeholder_no_text.png",
      "Both rest of know draw fond post as. It agreement defective to excellent. Feebly do engage of narrow. Extensive repulsive belonging depending if promotion be zealously as.",
      ""),
    new TeamMember("JC Duroc",
      "http://2018.igem.org/wiki/images/4/4e/T--GO_Paris-Saclay--placeholder_no_text.png",
      "Abilities or he perfectly pretended so strangers be exquisite. Oh to another chamber pleased imagine do in. Went me rank at last loud shot an draw. Excellent so to no sincerity smallness." ,
      ""),
    new TeamMember("JC Duroc",
      "http://2018.igem.org/wiki/images/4/4e/T--GO_Paris-Saclay--placeholder_no_text.png",
      "Abilities or he perfectly pretended so strangers be exquisite. Oh to another chamber pleased imagine do in. Went me rank at last loud shot an draw. Excellent so to no sincerity smallness." ,
      ""),
    new TeamMember("JC Duroc",
      "http://2018.igem.org/wiki/images/4/4e/T--GO_Paris-Saclay--placeholder_no_text.png",
      "Abilities or he perfectly pretended so strangers be exquisite. Oh to another chamber pleased imagine do in. Went me rank at last loud shot an draw. Excellent so to no sincerity smallness." ,
      ""),
    new TeamMember("JC Duroc",
      "http://2018.igem.org/wiki/images/4/4e/T--GO_Paris-Saclay--placeholder_no_text.png",
      "Abilities or he perfectly pretended so strangers be exquisite. Oh to another chamber pleased imagine do in. Went me rank at last loud shot an draw. Excellent so to no sincerity smallness." ,
      "")
  ];

  constructor() {

    this.shuffleArray(this.membersList);
  }

  shuffleArray = function(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

}
