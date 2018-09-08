import { Injectable } from '@angular/core';
import {PageChunkRecord, PAGE_CHUNK_MASTER_RECORD, SPECIAL_PAGE_CHUNK_MASTER_RECORD, SpeciaPageRecord} from './page-chunk-record';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PreInitLoaderService {

  constructor(private http: HttpClient) { }

  public loadPageAtInit()
  {
    if(environment.production == false)
      return; // No custom chunk loading.
    console.log("IPL : Initial page loader [APP_INITIALIZER]");
    let currUrl = window.location.href;
    console.log("URL : " + currUrl);

    /* Figure out if we're on a special page */
    let sp_regex = new RegExp('Team:GO_Paris-Saclay\\/.*');
    let sp_matchArray = currUrl.match(sp_regex);
    if(Array.isArray(sp_matchArray) && sp_matchArray.length) {
      // We are on a page with URL of the form Team:GO_Paris-Saclay/*
      let sp_currPath = sp_matchArray[0].slice(20);
      console.log("Special Page Path : " + sp_currPath);
      var sp_record = SPECIAL_PAGE_CHUNK_MASTER_RECORD.find(function (element: SpeciaPageRecord) {
        return element.specialPageName == sp_currPath;
      });

      if (sp_record == undefined) {
        console.log("IPL : No redirection record found for special page, page can't be loaded initially.\nIPL : This may be an error if the path is not part of the main chunk that is embedded in the html page");
        return;
      }

      console.log("IPL : Corresponding record found : " + sp_record.specialPageName + " (" + sp_record.chunkRecordPageName + ")");

      if(sp_record.chunkRecordPageName == "#MAIN#") {
        /* No separate chunk so nothing to do*/
        console.log("IPL : Record indicates this page is bundled with main, nothing to do.");
        return;
      }

      var ch_record = PAGE_CHUNK_MASTER_RECORD.find(function (element: PageChunkRecord) {
        return element.pageName == sp_record.chunkRecordPageName;
      });
      if (ch_record == undefined) {
        console.log("IPL : No record found for given special page, after performing redirection lookup successfully.");
        return;
      }


      if (ch_record.chunkLoaded == false) {
        const req = new XMLHttpRequest();
        req.open('GET', ch_record.chunkURL, false);
        req.send(null);

        if (req.status === 200) {
          let decodedData = atob(req.responseText);
          eval(decodedData);
          ch_record.chunkLoaded = true;
          console.log("IPL : Loaded : " + ch_record.pageName + " (" + ch_record.chunkURL + ")");
        } else {
          console.log("IPL : Error while getting data: %d (%s)", req.status, req.statusText);
        }
      }
      return;

    }

    let regex = new RegExp('#\\/.*');
    let matchArray = currUrl.match(regex);
    if(Array.isArray(matchArray) && matchArray.length) {

      let currPath = matchArray[0].slice(1);
      console.log("Path : " + currPath);

      var record = PAGE_CHUNK_MASTER_RECORD.find(function (element: PageChunkRecord) {
        return element.pageName == currPath;
      });
      if (record == undefined) {
        console.log("IPL : No record found, page can't be loaded initially.\nIPL : This may be an error if the path is not part of the main chunk that is embedded in the html page");
        return;
      }

      console.log("IPL : Corresponding record found : " + record.pageName + " (" + record.chunkURL + ")");


      if (record.chunkLoaded == false) {
        const req = new XMLHttpRequest();
        req.open('GET', record.chunkURL, false);
        req.send(null);

        if (req.status === 200) {
          let decodedData = atob(req.responseText);
          eval(decodedData);
          record.chunkLoaded = true;
          console.log("IPL : Loaded : " + record.pageName + " (" + record.chunkURL + ")");
        } else {
          console.log("IPL : Error while getting data: %d (%s)", req.status, req.statusText);
        }
      }
      return;
    }else{
      console.log("IPL : Main page, or uncaught error.");
    return;
  }
  }
}
