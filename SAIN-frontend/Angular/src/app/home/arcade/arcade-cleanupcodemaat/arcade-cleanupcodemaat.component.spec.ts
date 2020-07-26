import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeCleanupcodemaatComponent } from './arcade-cleanupcodemaat.component';

describe('ArcadeCleanupcodemaatComponent', () => {
  let component: ArcadeCleanupcodemaatComponent;
  let fixture: ComponentFixture<ArcadeCleanupcodemaatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadeCleanupcodemaatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadeCleanupcodemaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
