import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeDecaymetricsComponent } from './arcade-decaymetrics.component';

describe('ArcadeDecaymetricsComponent', () => {
  let component: ArcadeDecaymetricsComponent;
  let fixture: ComponentFixture<ArcadeDecaymetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadeDecaymetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadeDecaymetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
