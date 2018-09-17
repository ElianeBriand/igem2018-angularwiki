import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.css']
})
export class CollaborationsComponent implements OnInit {



  constructor() { }


  team_list: string[] = [
    "Sorbonne U (France)",
    "Bordeaux (France)",
    "Toulouse (France)",
    "Pasteur (France)",
    "Copenhagen (Denmark)",
    "Evry (France)",
    "Fau Erlangen (Germany)",
    "Tu Darmstadt (Germany)",
    "Dusseldorf (Germany)",
    "Eindhoven (Netherlands)",
    "EFL (Switzerland)",
    "Alto Helsinki (Finland)",
    "Stuttgart (Germany)",
    "U Born (Germany)",
    "Leiden (Netherlands)",
    "Aachen (Germany)",
    "Wurzburg (Germany)",
    "Bielefeld (Germany)",
    "ETH Zurich (Switzerland)",
    "Marburg (Germany)",
    "Boku Viena (Austria) ",
    "Paris Bettencourt (France)",
    "Utrecht (Netherlands) ",
    "Delaware (USA) ",
    "Lippstad (Germany)",
    "Tubigen (Germany)",
    "Groningen (Netherlands)",
    "New Castle (UK)",
    "Taichung (Taiwan)",
    "Hamburg (Germany)",
    "Munich(Germany)"
  ];

  ngOnInit() {
  }

}
