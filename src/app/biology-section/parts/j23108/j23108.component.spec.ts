import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { J23108Component } from './j23108.component';

describe('J23108Component', () => {
  let component: J23108Component;
  let fixture: ComponentFixture<J23108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ J23108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(J23108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
