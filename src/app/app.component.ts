import {Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {ActivatedRoute, Router, UrlSegment} from '@angular/router';
import {ChunkLoaderService} from './chunk-loader.service';
import {SPECIAL_PAGE_CHUNK_MASTER_RECORD, SpeciaPageRecord} from './page-chunk-record';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {


  showSubmenu: boolean = false;

  showBackHomeLogo: boolean = true;

  openedSideNav = true;

  public routerLinkChunkProcessing: (string) => void;

  private routerLinkChunkProcessingUnbound(routerLinkString: string, this1: any) {
    this1.chunkLoader.loadPageChunk(routerLinkString, function () {
      if(routerLinkString.search("dashboard") == -1)
      {
        this1.showBackHomeLogo = true;
      }else{
        this1.showBackHomeLogo = false;
      }

      this1.router.navigateByUrl(routerLinkString);
    });

  }

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private chunkLoader: ChunkLoaderService) {
    this.routerLinkChunkProcessing = (s: string) => {
      this.routerLinkChunkProcessingUnbound(s, this);
    };

    /* Figure out if we're on a special page */
    let currUrl = window.location.href;
    let sp_regex = new RegExp('Team:GO_Paris-Saclay\\/.*');
    let sp_matchArray = currUrl.match(sp_regex);
    if (Array.isArray(sp_matchArray) && sp_matchArray.length) {
      // We are on a page with URL of the form Team:GO_Paris-Saclay/*
      let sp_currPath = sp_matchArray[0].slice(20);
      console.log('Preparing to navigate to Special Page Path : ' + sp_currPath);
      var sp_record = SPECIAL_PAGE_CHUNK_MASTER_RECORD.find(function (element: SpeciaPageRecord) {
        return element.specialPageName == sp_currPath;
      });

      if (sp_record == undefined) {
        console.log('IPL : No redirection record found for special page.');
        return;
      }

      console.log('IPL : Corresponding record found : ' + sp_record.specialPageName + ' (' + sp_record.chunkRecordPageName + ', ' + sp_record.navTo + ')');

      router.navigate([sp_record.navTo]);

    }

    if(currUrl.search("dashboard") == -1)
    {
      this.showBackHomeLogo = true;
    }else{
      this.showBackHomeLogo = false;
    }




  }

/*  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
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
*/

  ngOnInit() {

    /*
    this.activetedRt.url.subscribe((value: UrlSegment[]) => {
      console.log(value);
    },error1 => {console.log("ActivatedRoute obs err : " + error1)})
    */
  }



/*
  selectedSideMenuItem($event) {
    this.routerLinkChunkProcessing($event.link);
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
      items: [
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
        },
        {
          label: 'Interlab',
          icon: 'swap_horizontal_circle',
          link: '/biology/interlab'
        }
      ]
    }, {
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
      items: [
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
        }, {
          label: 'Safety',
          icon: 'security',
          link: '/safety'
        }
      ]
    },
    {
      label: 'Lab Notebook',
      icon: 'blur_circular',
      link: '/labnotebook'
    }
  ];

*/
}
