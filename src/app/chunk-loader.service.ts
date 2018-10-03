import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {from, Observable} from 'rxjs';


import {PageChunkRecord, PAGE_CHUNK_MASTER_RECORD, IMAGE_PRELOAD_MASTER_RECORD, ImagePreloadRecord} from './page-chunk-record';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChunkLoaderService {

  static singletonInstance: ChunkLoaderService;


  public records = PAGE_CHUNK_MASTER_RECORD;
  public preload_records = IMAGE_PRELOAD_MASTER_RECORD;

  constructor(private http: HttpClient) {


    if (ChunkLoaderService.singletonInstance) {
      return ChunkLoaderService.singletonInstance;
    }
    ChunkLoaderService.singletonInstance = this;

    this.preloadImages(); // We always preload static images

    if(environment.production == false)
      return ChunkLoaderService.singletonInstance; // No custom chunk loading.

    this.records.forEach((element: PageChunkRecord) => {
      setTimeout(() => {
        this.loadPageChunk(element.pageName, () => {});
      })
    })
  }


  public preloadImages() {
    this.preload_records.forEach((record: ImagePreloadRecord) => {
      setTimeout(() => {
        /*
        console.log("Prefetching : " + record.url)
        this.http.get(record.url, {responseType: 'text'}).subscribe((html: any) => {}, error1 => console.log(error1));
        */
        //*
        let preloadLink :any = document.createElement("link");
        preloadLink.rel = "preload";
        preloadLink.href = record.url;
        preloadLink.as = "image";
        preloadLink.crossorigin = "anonymous";
        preloadLink.type = record.mime;
        document.head.appendChild(preloadLink);
        //*/
      })
    })
  }


  public asyncLoadPageChunk(pageName: string) : Observable<boolean> {
    let returnPromise = new Promise<boolean>((resolve, reject) => {
      var record = this.records.find(function(element: PageChunkRecord) {
        if(pageName.indexOf(element.pageName) == -1)
        {
          return false;
        }else {
          return true;
        }
      });
      if(record == undefined)
      {
        resolve(true);
        return;
      }
      console.log("Loading : " + record.pageName + " (" + record.chunkURL + ", " + record.chunkLoaded +") [Async]");

      if(record.chunkLoaded == false)
      {
        this.http.get(record.chunkURL, {responseType: 'text'})
          .subscribe((html: any) => this.asyncLoadDataChunk(html, record, resolve), error1 => console.log(error1));
      } else {
        resolve(true);
        return; // already loaded.
      }
    });
    return from(returnPromise);
  }


  public loadPageChunk(pageName: string, callback: () => void) {
    var record = this.records.find(function(element: PageChunkRecord) {
      if(pageName.indexOf(element.pageName) == -1)
      {
        return false;
      }else {
        return true;
      }
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

  private asyncLoadDataChunk(base64data: any, record: PageChunkRecord, resolve: (bool) => void)
  {
    let decodedData = atob(base64data);
    eval(decodedData);
    record.chunkLoaded = true;
    console.log("Loaded : " + record.pageName + " (" + record.chunkURL + ") [Async]");
    resolve(true);
    return;
  }

}
