import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterlabComponent } from './interlab.component';

describe('InterlabComponent', () => {
  let component: InterlabComponent;
  let fixture: ComponentFixture<InterlabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterlabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
