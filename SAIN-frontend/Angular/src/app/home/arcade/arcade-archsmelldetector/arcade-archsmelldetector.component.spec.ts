import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeArchsmelldetectorComponent } from './arcade-archsmelldetector.component';

describe('ArcadeArchsmelldetectorComponent', () => {
  let component: ArcadeArchsmelldetectorComponent;
  let fixture: ComponentFixture<ArcadeArchsmelldetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadeArchsmelldetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadeArchsmelldetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
