import { Component, OnInit, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {


  showSubmenu: boolean = false;

  openedSideNav = true;


  constructor(private breakpointObserver: BreakpointObserver) {
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  openSideNav(): void {
    if (this.openedSideNav === true) {
      this.openedSideNav = false;
    } else {
      this.openedSideNav = true;
    }
  }


  ngOnInit() {

  }
}
