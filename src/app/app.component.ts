import { Component, OnInit, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';
import {ChunkLoaderService} from './chunk-loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {


  showSubmenu: boolean = false;

  openedSideNav = true;

  public routerLinkChunkProcessing: (string) => void;

  private routerLinkChunkProcessingUnbound(routerLinkString: string, this1: any)
  {
    this1.chunkLoader.loadPageChunk(routerLinkString, function() {
      this1.router.navigateByUrl(routerLinkString);
    });

  }

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private chunkLoader: ChunkLoaderService) {
    this.routerLinkChunkProcessing = (s: string) => {this.routerLinkChunkProcessingUnbound(s, this)};
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
