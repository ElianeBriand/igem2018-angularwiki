import {Component, OnInit, AfterViewInit} from '@angular/core';


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


import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml2'
})
export class SanitizeHtml2Pipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) {
  }

  transform(v: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }
}


@Component({
  selector: 'app-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css'],
  animations: [
    trigger('cardState', [
      state('inactive', style({})),
      state('active', style({})),
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

  static singletonInstance: TeamRosterComponent;


  membersList: TeamMember[] = [
    new TeamMember('Loading members...',
      'http://2018.igem.org/wiki/images/4/4e/T--GO_Paris-Saclay--placeholder_no_text.png',
      'Please wait...', true)
  ];

  constructor(private http: HttpClient) {
    if (TeamRosterComponent.singletonInstance) {
      return TeamRosterComponent.singletonInstance;
    }
    TeamRosterComponent.singletonInstance = this;

    function b64DecodeUnicode(str) {
      return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    }

    this.http.get('http://2018.igem.org/wiki/images/c/c5/T--GO_Paris-Saclay--team_list.txt', {responseType: 'text'})
      .subscribe((data: any) => {
        let objjson: TeamMember[] = JSON.parse(data);
        this.membersList = objjson;
        this.shuffleArray(this.membersList);

        this.membersList.forEach((element, index) => {
          console.log('element src : ' + element.image_src);
          if (element.image_src === 'http://2018.igem.org/wiki/images/4/4e/T--GO_Paris-Saclay--placeholder_no_text.png') {
            console.log('Pushed back');
            this.membersList.push(this.membersList.splice(index, 1)[0]);
          }
        });
        this.membersList.forEach((element, index) => {
          console.log('element src : ' + element.image_src);
          if (element.image_src === 'http://2018.igem.org/wiki/images/4/4e/T--GO_Paris-Saclay--placeholder_no_text.png') {
            console.log('Pushed back');
            this.membersList.push(this.membersList.splice(index, 1)[0]);
          }
        });
      }, error1 => console.log(error1));

  }

  shuffleArray = function (array) {
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
  };

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

}
