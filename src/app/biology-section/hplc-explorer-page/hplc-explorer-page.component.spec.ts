import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HplcExplorerPageComponent } from './hplc-explorer-page.component';

describe('HplcExplorerPageComponent', () => {
  let component: HplcExplorerPageComponent;
  let fixture: ComponentFixture<HplcExplorerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HplcExplorerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HplcExplorerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
