import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolCComponent } from './fol-c.component';

describe('FolCComponent', () => {
  let component: FolCComponent;
  let fixture: ComponentFixture<FolCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
