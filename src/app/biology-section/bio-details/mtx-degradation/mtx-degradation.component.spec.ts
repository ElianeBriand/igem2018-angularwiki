import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxDegradationComponent } from './mtx-degradation.component';

describe('MtxDegradationComponent', () => {
  let component: MtxDegradationComponent;
  let fixture: ComponentFixture<MtxDegradationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtxDegradationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxDegradationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
