import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RoutesRecognized,
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
} from '@angular/router';

import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';


/**
 * This service intercepts all routing requests going through Angular.
 * Source: https://codereview.stackexchange.com/questions/161783/angular2-route-interceptor
 */
@Injectable({
  providedIn: 'root'
})
export class RouteInterceptor {
  private events: Map<number, Observable<Event>> = new Map();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.populateEventMap();
  }

  /**
   * Signs up a callback for when navigation starts.
   * @param callback The callback function to invoke.
   */
  onNavigationStart(callback: (router: ActivatedRoute) => void) {
    this.getRouteOn(RouteInterceptorEvents.NavigationStart, callback);
  }

  /**
   * Signs up a callback for when navigation ends.
   * @param callback The callback function to invoke.
   */
  onNavigationEnd(callback: (router: ActivatedRoute) => void) {
    this.getRouteOn(RouteInterceptorEvents.NavigationEnd, callback);
  }

  /**
   * Signs up a callback for when navigation is cancelled.
   * @param callback The callback function to invoke.
   */
  onNavigationCancel(callback: (router: ActivatedRoute) => void) {
    this.getRouteOn(RouteInterceptorEvents.NavigationCancel, callback);
  }

  /**
   * Signs up a callback for when navigation errors.
   * @param callback The callback function to invoke.
   */
  onNavigationError(callback: (router: ActivatedRoute) => void) {
    this.getRouteOn(RouteInterceptorEvents.NavigationError, callback);
  }

  /**
   * Signs up a callback for when configuration load starts.
   * @param callback The callback function to invoke.
   */
  onConfigLoadStart(callback: (router: ActivatedRoute) => void) {
    this.getRouteOn(RouteInterceptorEvents.ConfigLoadStart, callback);
  }

  /**
   * Signs up a callback for when configuration load ends.
   * @param callback The callback function to invoke.
   */
  onConfigLoadEnd(callback: (router: ActivatedRoute) => void) {
    this.getRouteOn(RouteInterceptorEvents.ConfigLoadEnd, callback);
  }

  /**
   * Signs up a callback for when the route is recongized.
   * @param callback The callback function to invoke.
   */
  onRouteRecognized(callback: (router: ActivatedRoute) => void) {
    this.getRouteOn(RouteInterceptorEvents.RouteRecognized, callback);
  }

  private getRouteOn(eventType: number, callback: (router: ActivatedRoute) => void) {
    this.events[eventType]
    // By returning a new Object (this.activatedRoute) into the stream, we
    // essentially swap what we're observing.
    // At this point we only run .map() if the filtered event (this.events[eventType])
    // successfully returns the event, meaning the event of 'eventType' has been triggered.
      .map(() => this.activatedRoute)
      // Traverse the state tree to find the last activated route, and then
      // return it to the stream. Doing this allows us to dive into the 'children'
      // property of the routes config to fetch the corresponding page title(s).
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      // Filter un-named (primary) router outlets only.
      .filter(route => route.outlet === 'primary')
      .subscribe(route => callback(route));
  }

  private populateEventMap() {
    this.events[RouteInterceptorEvents.NavigationStart] = this.router.events.pipe(filter(e => e instanceof NavigationStart));
    this.events[RouteInterceptorEvents.NavigationEnd] = this.router.events.pipe(filter(e => e instanceof NavigationEnd));
    this.events[RouteInterceptorEvents.NavigationCancel] = this.router.events.pipe(filter(e => e instanceof NavigationCancel));
    this.events[RouteInterceptorEvents.NavigationError] = this.router.events.pipe(filter(e => e instanceof NavigationError));
    this.events[RouteInterceptorEvents.ConfigLoadStart] = this.router.events.pipe(filter(e => e instanceof RouteConfigLoadStart));
    this.events[RouteInterceptorEvents.ConfigLoadEnd] = this.router.events.pipe(filter(e => e instanceof RouteConfigLoadEnd));
    this.events[RouteInterceptorEvents.RouteRecognized] = this.router.events.pipe(filter(e => e instanceof RoutesRecognized));
  }
}

enum RouteInterceptorEvents {
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  ConfigLoadStart,
  ConfigLoadEnd,
  RouteRecognized
}
