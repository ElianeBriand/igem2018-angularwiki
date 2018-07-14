import { TestBed, inject } from '@angular/core/testing';

import { RouteInterceptorService } from './route-interceptor.service';

describe('RouteInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteInterceptorService]
    });
  });

  it('should be created', inject([RouteInterceptorService], (service: RouteInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
