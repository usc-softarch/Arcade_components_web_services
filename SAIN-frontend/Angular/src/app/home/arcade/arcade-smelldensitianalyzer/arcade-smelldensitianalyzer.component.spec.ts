import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmelldensitianalyzerComponent } from './arcade-smelldensitianalyzer.component';

describe('ArcadeSmelldensitianalyzerComponent', () => {
  let component: SmelldensitianalyzerComponent;
  let fixture: ComponentFixture<SmelldensitianalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmelldensitianalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmelldensitianalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
