import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeArcComponent } from './arcade-arc.component';

describe('ArcadeArcComponent', () => {
  let component: ArcadeArcComponent;
  let fixture: ComponentFixture<ArcadeArcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadeArcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadeArcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
