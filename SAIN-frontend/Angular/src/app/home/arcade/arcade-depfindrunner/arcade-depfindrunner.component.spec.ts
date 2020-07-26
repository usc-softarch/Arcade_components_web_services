import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeDepfindrunnerComponent } from './arcade-depfindrunner.component';

describe('ArcadeDepfindrunnerComponent', () => {
  let component: ArcadeDepfindrunnerComponent;
  let fixture: ComponentFixture<ArcadeDepfindrunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadeDepfindrunnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadeDepfindrunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
