import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsCollectionComponent } from './parts-collection.component';

describe('PartsCollectionComponent', () => {
  let component: PartsCollectionComponent;
  let fixture: ComponentFixture<PartsCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
