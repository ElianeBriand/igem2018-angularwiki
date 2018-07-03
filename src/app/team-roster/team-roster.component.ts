import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css']
})
export class TeamRosterComponent implements OnInit, AfterViewInit {


  membersList = [
    {name: "Kenn P.", img_src: "assets/kenn.jpg", bio: "Very productive, innovating, he can take decisions and he did so many things for our team: Searching Sponsor, Biology, Collaboration ! And behind iGEM, he is a big fan of windsurfing, and loves the sea !" },
    {name: "Guillaume G.", img_src: "assets/guillaume.jpg", bio: "Our second mathematician ! He knew nothing about biology before iGEM but now, he loves that ! He can spend hours to solve problems. And after iGEM ? Mountains and plays the violin. " },
    {name: "Raphael G.", img_src: "assets/raphael.jpg", bio: "Both rest of know draw fond post as. It agreement defective to excellent. Feebly do engage of narrow. Extensive repulsive belonging depending if promotion be zealously as." },
    {name: "JC Duroc", img_src: "assets/ceo.jpg", bio: "Abilities or he perfectly pretended so strangers be exquisite. Oh to another chamber pleased imagine do in. Went me rank at last loud shot an draw. Excellent so to no sincerity smallness." },
    {name: "JC Duroc", img_src: "assets/ceo.jpg", bio: "Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest." },
    {name: "JC Duroc", img_src: "assets/ceo.jpg", bio: "Him boisterous invitation dispatched had connection inhabiting projection. By mutual an mr danger garret edward an. Diverted as strictly exertion addition no disposal by stanhill." },
    {name: "JC Duroc", img_src: "assets/ceo.jpg", bio: "On recommend tolerably my belonging or am. Mutual has cannot beauty indeed now sussex merely you. It possible no husbands jennings ye." }
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
