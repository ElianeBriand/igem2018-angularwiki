import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDisplayComponent } from './example-display.component';

describe('ExampleDisplayComponent', () => {
  let component: ExampleDisplayComponent;
  let fixture: ComponentFixture<ExampleDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
