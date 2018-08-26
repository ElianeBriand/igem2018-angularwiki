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

  selectedSideMenuItem($event) {
    this.routerLinkChunkProcessing($event.link)
  }

  sideMenuConfig = {
    paddingAtStart: true,
    // classname: 'my-custom-class',
    //listBackgroundColor: 'rgb(208, 241, 239)',
    //fontColor: 'rgb(8, 54, 71)',
    //backgroundColor: 'rgb(208, 241, 239)',
    selectedListFontColor: 'rgb(111,172,93)',
  };

  sideMenuList = [
    {
      label: 'Main page',
      icon: 'dashboard',
      link: '/dashboard'
    },
    {
      label: 'Project Design',
      icon: 'assessment',
      link: '/project'
    },
    {
      label: 'Biology',
      icon: 'blur_circular',
      items : [
        {
          label: 'Overview',
          icon: 'explore',
          link: '/biology/overview'
        },
        {
          label: 'Parts',
          icon: 'view_comfy',
          link: '/biology/parts'
        },
        {
          label: 'Strains',
          icon: 'blur_on',
          link: '/biology/strains'
        }
      ]
    },        {
      label: 'Modeling',
      icon: 'timeline',
      link: '/modeling'
    },
    {
      label: 'Software',
      icon: 'memory',
      link: '/software'
    },
    {
      label: 'Human Practices',
      icon: 'accessibility_new',
      link: '/human-practices'
    },

    {
      label: 'Our team',
      icon: 'people',
      link: '/team'
    },
    {
      label: 'Support',
      icon: 'folder_special',
      items : [
        {
          label: 'Sponsors',
          icon: 'attach_money',
          link: '/support'
        },
        {
          label: 'Collaborations',
          icon: 'public',
          link: '/collaborations'
        },
        {
          label: 'Attribution',
          icon: 'person_pin',
          link: '/attribution'
        },
        {
          label: 'References',
          icon: 'book',
          link: '/references'
        },
      ]
    },
    {
      label: 'Lab Notebook',
      icon: 'blur_circular',
      link: '/labnotebook'
    }
  ];

}
