import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeterogeniousComponent } from './heterogenious.component';

describe('HeterogeniousComponent', () => {
  let component: HeterogeniousComponent;
  let fixture: ComponentFixture<HeterogeniousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeterogeniousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeterogeniousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
