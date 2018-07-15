import { TestBed, inject } from '@angular/core/testing';

import { PreInitLoaderService } from './pre-init-loader.service';

describe('PreInitLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreInitLoaderService]
    });
  });

  it('should be created', inject([PreInitLoaderService], (service: PreInitLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
