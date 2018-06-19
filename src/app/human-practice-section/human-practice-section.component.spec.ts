import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanPracticeSectionComponent } from './human-practice-section.component';

describe('HumanPracticeSectionComponent', () => {
  let component: HumanPracticeSectionComponent;
  let fixture: ComponentFixture<HumanPracticeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanPracticeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanPracticeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
