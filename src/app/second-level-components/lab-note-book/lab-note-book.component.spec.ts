import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabNoteBookComponent } from './lab-note-book.component';

describe('LabNoteBookComponent', () => {
  let component: LabNoteBookComponent;
  let fixture: ComponentFixture<LabNoteBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabNoteBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabNoteBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
