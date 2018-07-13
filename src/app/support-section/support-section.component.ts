import { Component, OnInit } from '@angular/core';
import {TeamMember} from '../team-roster/team-roster.component';
import {animate, state, style, transition, trigger} from '@angular/animations';


export class Sponsor {
  public name: string;
  public image_src: string;
  public sponsor_text: string;
  public expanded;
  public expanded_bool: boolean;

  constructor(name: string, image_src: string, sponsor_text: string) {
    this.name = name;
    this.image_src = image_src;
    this.sponsor_text = sponsor_text;
    this.expanded_bool = false;
    this.expanded = 'inactive' ;

  }

  toggleState() {
    this.expanded_bool = !this.expanded_bool
    this.expanded = this.expanded === 'active' ? 'inactive' : 'active';
  }
}

@Component({
  selector: 'app-support-section',
  templateUrl: './support-section.component.html',
  styleUrls: ['./support-section.component.css'],
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
export class SupportSectionComponent implements OnInit {


  sponsorsList = [
    new Sponsor("FSDIE",
      "http://2018.igem.org/wiki/images/7/72/T--GO_Paris-Saclay--FSDIE.png",
      "The FSDIE is ..."),
    new Sponsor("New England Biolab",
      "http://2018.igem.org/wiki/images/f/f8/T--GO_Paris-Saclay--NEB.png",
      "NEB is ..."),
    new Sponsor("DesignBro",
      "http://2018.igem.org/wiki/images/0/0f/T--GO_Paris-Saclay--DesignBro.png",
      "DesignBro is ..."),
    new Sponsor("MathWorks",
      "http://2018.igem.org/wiki/images/a/aa/T--GO_Paris-Saclay--matworks.png",
      "MathWorks is ..."),
    new Sponsor("Integrated DNA Technologies",
      "http://2018.igem.org/wiki/images/d/d4/T--GO_Paris-Saclay--IDT.png",
      "IDT is ..."),
    new Sponsor("Embassade de France aux USA",
      "http://2018.igem.org/wiki/images/d/df/T--GO_Paris-Saclay--emba_fr_us.jpg",
      "EmbaFrance is ...")
  ]

  constructor() {

    this.shuffleArray(this.sponsorsList);
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

}
