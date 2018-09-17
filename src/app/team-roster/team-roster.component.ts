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
import {HttpClient} from '@angular/common/http';

export class TeamMember {
  public name: string;
  public image_src: string;
  public bio: string;
  public advisor: boolean;

  constructor(name: string, image_src: string, bio: string, advflag: boolean) {
    this.name = name;
    this.image_src = image_src;
    this.bio = bio;
    this.advisor = advflag;
  }

}


import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml2'
})
export class SanitizeHtml2Pipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) {
  }

  transform(v: string):SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
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


  membersList : TeamMember[] = [
    new TeamMember("Error member",
      "http://2018.igem.org/wiki/images/4/4e/T--GO_Paris-Saclay--placeholder_no_text.png",
      "Very productive, innovating, he can take decisions and he did so many things for our team: "+
      "Searching Sponsor, Biology, Collaboration ! And behind iGEM, he is a big fan of windsurfing, and loves the sea !", true)
  ];

  constructor(private http: HttpClient) {

    function b64DecodeUnicode(str) {
      return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      }).join(''))
    }

this.http.get("http://2018.igem.org/wiki/images/e/ee/T--GO_Paris-Saclay--team_list_b64.txt", {responseType: 'text'})
.subscribe((data: any) => {
let decodedData = b64DecodeUnicode(data);
console.log()
let objjson: TeamMember[] = JSON.parse(decodedData);
this.membersList = objjson;
  this.shuffleArray(this.membersList);
}, error1 => console.log(error1));




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
