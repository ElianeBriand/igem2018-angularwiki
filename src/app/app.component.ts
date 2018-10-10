import {Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {ActivatedRoute, Router, UrlSegment} from '@angular/router';
import {ChunkLoaderService} from './chunk-loader.service';
import {SPECIAL_PAGE_CHUNK_MASTER_RECORD, SpeciaPageRecord} from './page-chunk-record';
import {environment} from '../environments/environment';
import {error_reference, Reference} from './reference-manager.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {ReferenceSheet} from './reference-box/reference-box.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {


  showSubmenu: boolean = false;

  public sourcesheetref : MatBottomSheetRef;

  showBackHomeLogo: boolean = true;

  openedSideNav = true;

  public routerLinkChunkProcessing: (string) => void;

  public routerLinkChunkProcessingUnbound(routerLinkString: string, this1: any) {
    if(environment.production == false)
      {
        console.log("AppComponent::routerLinkChunkProcessingUnbound Prod = false; navigating directly to " + routerLinkString);
        this1.router.navigate([routerLinkString]);
      }

    if(routerLinkString === "/")
    {
      this1.showBackHomeLogo = false;
    }else{
      this1.showBackHomeLogo = true;
    }
    this1.chunkLoader.loadPageChunk(routerLinkString, function () {
      this1.router.navigate([routerLinkString]);
    });

  }

  openWikiSourceBottomSheet(): void {
    this.sourcesheetref = this.bottomSheet.open(WikiSourceSheet);
  }


  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private chunkLoader: ChunkLoaderService, private bottomSheet: MatBottomSheet) {
    this.routerLinkChunkProcessing = (s: string) => {
      this.routerLinkChunkProcessingUnbound(s, this);
    };


    /* Figure out if we're on a special page */
    let currUrl = window.location.href;
    console.log("App component : " + currUrl)

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


    this.showBackHomeLogo = true;
    if(currUrl === "http://2018.igem.org/Team:GO_Paris-Saclay" ||
      currUrl === "http://2018.igem.org/Team:GO_Paris-Saclay#/" ||
      currUrl === "http://2018.igem.org/Team:GO_Paris-Saclay#")
    {
      this.showBackHomeLogo = false;
    }



  }


  ngOnInit() {

  }


}



@Component({
  selector: 'wikisource-sheet',
  templateUrl: 'computing-section/wikisourcesheet.html',
})
export class WikiSourceSheet {


  constructor(public bottomSheetRef: MatBottomSheetRef<ReferenceSheet>) {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
