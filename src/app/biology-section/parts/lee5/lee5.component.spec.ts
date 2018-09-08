import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lee5Component } from './lee5.component';

describe('Lee5Component', () => {
  let component: Lee5Component;
  let fixture: ComponentFixture<Lee5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lee5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lee5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
