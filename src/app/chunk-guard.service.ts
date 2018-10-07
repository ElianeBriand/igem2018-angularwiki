import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {from, Observable} from 'rxjs';
import {ChunkLoaderService} from './chunk-loader.service';
import {environment} from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ChunkGuardService implements CanActivate {

  constructor(public router: Router, public chunkLoader: ChunkLoaderService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if(environment.production == false) {
      console.log("can activate: " + state.url + " | prod : " + environment.production);
      return from(new Promise<boolean>((resolve, reject) => {
        resolve(true);
      })); // No custom chunk loading.
    }
    let url: string = state.url;
    console.log("ChunkGuard : " + url);
    let returnObs = this.chunkLoader.asyncLoadPageChunk(url);
    return returnObs;
  }
}

