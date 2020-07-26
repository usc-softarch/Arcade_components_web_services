import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeC2caverageanalyzeComponent } from './arcade-c2caverageanalyze.component';

describe('ArcadeC2caverageanalyzeComponent', () => {
  let component: ArcadeC2caverageanalyzeComponent;
  let fixture: ComponentFixture<ArcadeC2caverageanalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadeC2caverageanalyzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadeC2caverageanalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
