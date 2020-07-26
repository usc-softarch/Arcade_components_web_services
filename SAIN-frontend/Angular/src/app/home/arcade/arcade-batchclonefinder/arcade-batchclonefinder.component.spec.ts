import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeBatchclonefinderComponent } from './arcade-batchclonefinder.component';

describe('ArcadeBatchclonefinderComponent', () => {
  let component: ArcadeBatchclonefinderComponent;
  let fixture: ComponentFixture<ArcadeBatchclonefinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadeBatchclonefinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadeBatchclonefinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
