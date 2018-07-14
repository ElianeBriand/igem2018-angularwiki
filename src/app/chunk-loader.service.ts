import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';
import {RouteInterceptor} from './route-interceptor.service';
import {ActivatedRoute, ParamMap} from '@angular/router';


export class PageChunkRecord {
  public pageName: string;
  public chunkURL: string;
  public chunkLoaded: boolean;

  constructor(pageName:string, chunkURL: string) {
    this.pageName = pageName;
    this.chunkURL = chunkURL;
    this.chunkLoaded = false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ChunkLoaderService {


  public records = [
    new PageChunkRecord("/support","support_chunk.js")
  ]

  constructor(private http: HttpClient, private routeInterceptor : RouteInterceptor) {
    routeInterceptor.onNavigationStart((route: ActivatedRoute) => {
      route.paramMap.subscribe((paramMap: ParamMap) => () => {
        if(paramMap.has('pagepath'))
          console.log("Intercepted navigation to : " + paramMap.get('pagepath'));
        else
          console.log("Intercepted navigation with no pagepath");
      });
    })
    this.records.forEach((element: PageChunkRecord) => {
      setTimeout(() => {
        this.loadPageChunk(element.pageName, () => {});
      })
    })
  }

  public loadPageChunk(pageName: string, callback: () => void) {
    var record = this.records.find(function(element: PageChunkRecord) {
      return element.pageName == pageName;
    });
    if(record == undefined)
    {
      callback(); // We have no records, so we assume it is not lazy loaded.
      return;
    }
    console.log("Loading : " + record.pageName + " (" + record.chunkURL + ")");

    if(record.chunkLoaded == false)
    {
      this.http.get(record.chunkURL, {responseType: 'text'})
        .subscribe((html: any) => this.loadDataChunk(html, callback, record), error1 => console.log(error1));
    } else {
      callback(); // already loaded.
    }
  }

  private loadDataChunk(base64data: any, callback: () => void, record: PageChunkRecord)
  {
    let decodedData = atob(base64data);
    eval(decodedData);
    record.chunkLoaded = true;
    console.log("Loaded : " + record.pageName + " (" + record.chunkURL + ")");
    callback();
  }
}
