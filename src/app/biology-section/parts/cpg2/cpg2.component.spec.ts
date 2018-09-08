import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpg2Component } from './cpg2.component';

describe('Cpg2Component', () => {
  let component: Cpg2Component;
  let fixture: ComponentFixture<Cpg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cpg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cpg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
