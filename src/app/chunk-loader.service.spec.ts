import { TestBed, inject } from '@angular/core/testing';

import { ChunkLoaderService } from './chunk-loader.service';

describe('ChunkLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChunkLoaderService]
    });
  });

  it('should be created', inject([ChunkLoaderService], (service: ChunkLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
