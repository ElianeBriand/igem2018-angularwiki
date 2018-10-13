import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-j23108',
  templateUrl: './j23108.component.html',
  styleUrls: ['./j23108.component.css']
})
export class J23108Component implements OnInit, AfterViewInit {


  private fragment: string;

  constructor(private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
