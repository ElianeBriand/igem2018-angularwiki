import { TestBed, inject } from '@angular/core/testing';

import { ReferenceManagerService } from './reference-manager.service';

describe('ReferenceManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferenceManagerService]
    });
  });

  it('should be created', inject([ReferenceManagerService], (service: ReferenceManagerService) => {
    expect(service).toBeTruthy();
  }));
});
