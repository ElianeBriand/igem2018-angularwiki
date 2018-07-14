import { TestBed, inject } from '@angular/core/testing';

import { ChunkGuardService } from './chunk-guard.service';

describe('ChunkGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChunkGuardService]
    });
  });

  it('should be created', inject([ChunkGuardService], (service: ChunkGuardService) => {
    expect(service).toBeTruthy();
  }));
});
