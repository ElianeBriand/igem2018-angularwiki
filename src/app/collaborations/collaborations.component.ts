import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';





@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.css']
})
export class CollaborationsComponent implements OnInit, AfterViewInit {


  private fragment: string;



  constructor(public router: Router, private route: ActivatedRoute) { }


  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }

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



}
