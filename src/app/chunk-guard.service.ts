import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {Observable} from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChunkGuardService {

  constructor(public router: Router) {}
  canActivate(): Observable<boolean> {
    let returnPromise = new Promise<boolean>((resolve, reject) => {

      setTimeout(resolve, 100, true);
    });
    return from(returnPromise);
  }
}

