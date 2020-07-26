import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeAcdcComponent } from './arcade-acdc.component';

describe('ArcadeAcdcComponent', () => {
  let component: ArcadeAcdcComponent;
  let fixture: ComponentFixture<ArcadeAcdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadeAcdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadeAcdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
