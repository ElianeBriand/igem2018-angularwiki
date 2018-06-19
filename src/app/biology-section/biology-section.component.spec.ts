import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiologySectionComponent } from './biology-section.component';

describe('BiologySectionComponent', () => {
  let component: BiologySectionComponent;
  let fixture: ComponentFixture<BiologySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiologySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiologySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
