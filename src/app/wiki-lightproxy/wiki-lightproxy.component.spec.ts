import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiLightproxyComponent } from './wiki-lightproxy.component';

describe('WikiLightproxyComponent', () => {
  let component: WikiLightproxyComponent;
  let fixture: ComponentFixture<WikiLightproxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiLightproxyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiLightproxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
