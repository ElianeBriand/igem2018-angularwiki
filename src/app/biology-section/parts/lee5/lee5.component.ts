import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lee5',
  templateUrl: './lee5.component.html',
  styleUrls: ['./lee5.component.css']
})
export class Lee5Component implements OnInit {

  private fragment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
