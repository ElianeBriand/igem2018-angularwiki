import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {from, Observable} from 'rxjs';


import {PageChunkRecord, PAGE_CHUNK_MASTER_RECORD} from './page-chunk-record'
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChunkLoaderService {


  public records = PAGE_CHUNK_MASTER_RECORD;

  constructor(private http: HttpClient) {
    if(environment.production == false)
      return; // No custom chunk loading.
    this.records.forEach((element: PageChunkRecord) => {
      setTimeout(() => {
        this.loadPageChunk(element.pageName, () => {});
      })
    })
  }




  public asyncLoadPageChunk(pageName: string) : Observable<boolean> {
    let returnPromise = new Promise<boolean>((resolve, reject) => {
      var record = this.records.find(function(element: PageChunkRecord) {
        return element.pageName == pageName;
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