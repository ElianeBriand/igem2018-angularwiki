import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputingSectionComponent } from './computing-section.component';

describe('ComputingSectionComponent', () => {
  let component: ComputingSectionComponent;
  let fixture: ComponentFixture<ComputingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
