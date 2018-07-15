import { Injectable } from '@angular/core';
import {PageChunkRecord, PAGE_CHUNK_MASTER_RECORD} from './page-chunk-record'
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';


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
    let regex = new RegExp('#\\/.*');
    let matchArray = currUrl.match(regex);
    let currPath = matchArray[0].slice(1);
    console.log("URL : " +  currUrl);
    console.log("Path : " + currPath);

    var record = PAGE_CHUNK_MASTER_RECORD.find(function(element: PageChunkRecord) {
      return element.pageName == currPath;
    });
    if(record == undefined)
    {
      console.log("IPL : No record found, page can't be loaded initially.\nIPL : This may be an error if the path is not part of the main chunk that is embedded in the html page");
      return;
    }

    console.log("IPL : Corresponding record found : " + record.pageName + " (" + record.chunkURL + ")");


    if(record.chunkLoaded == false) {
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
  }
}
