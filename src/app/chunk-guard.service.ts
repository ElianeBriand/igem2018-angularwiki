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
      console.log("ChunkGuard::CanActivate: " + state.url + " | prod : " + environment.production);
      return new Observable<boolean>((observer) => {
        observer.next(true);
        console.log("ChunkGuard::CanActivate::Observable<bool> : next(true) called.")
        observer.complete();
        console.log("ChunkGuard::CanActivate::Observable<bool> : complete called.")

      });
    }
    let url: string = state.url;
    console.log("ChunkGuard::CanActivate " + url);
    let returnObs = this.chunkLoader.asyncLoadPageChunk(url);
    return returnObs;
  }
}

