import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ler',
  templateUrl: './ler.component.html',
  styleUrls: ['./ler.component.css']
})
export class LerComponent implements OnInit {

  constructor(private route: ActivatedRoute, public router: Router) { }


  private fragment: string;


  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
