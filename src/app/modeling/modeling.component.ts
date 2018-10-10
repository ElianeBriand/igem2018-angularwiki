import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-modeling',
  templateUrl: './modeling.component.html',
  styleUrls: ['./modeling.component.css']
})
export class ModelingComponent implements OnInit, AfterViewInit {

  private fragment: string;

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });

  }

  ngAfterViewInit() {
    // @ts-ignore
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }





}
