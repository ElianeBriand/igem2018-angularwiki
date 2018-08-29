import { TestBed, inject } from '@angular/core/testing';

import { LabnotebookCalEventService } from './labnotebook-cal-event.service';

describe('LabnotebookCalEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabnotebookCalEventService]
    });
  });

  it('should be created', inject([LabnotebookCalEventService], (service: LabnotebookCalEventService) => {
    expect(service).toBeTruthy();
  }));
});
