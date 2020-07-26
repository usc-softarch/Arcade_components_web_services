import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeSmellevolutionanalyzerComponent } from './arcade-smellevolutionanalyzer.component';

describe('ArcadeSmellevolutionanalyzerComponent', () => {
  let component: ArcadeSmellevolutionanalyzerComponent;
  let fixture: ComponentFixture<ArcadeSmellevolutionanalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadeSmellevolutionanalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadeSmellevolutionanalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
