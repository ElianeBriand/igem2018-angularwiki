import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromatoExplorerComponent } from './chromato-explorer.component';

describe('ChromatoExplorerComponent', () => {
  let component: ChromatoExplorerComponent;
  let fixture: ComponentFixture<ChromatoExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChromatoExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromatoExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
