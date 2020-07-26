import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeA2aComponent } from './arcade-a2a.component';

describe('ArcadeA2aComponent', () => {
  let component: ArcadeA2aComponent;
  let fixture: ComponentFixture<ArcadeA2aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadeA2aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadeA2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
