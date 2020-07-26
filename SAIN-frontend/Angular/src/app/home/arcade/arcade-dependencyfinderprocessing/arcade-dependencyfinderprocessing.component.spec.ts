import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeDependencyfinderprocessingComponent } from './arcade-dependencyfinderprocessing.component';

describe('ArcadeDependencyfinderprocessingComponent', () => {
  let component: ArcadeDependencyfinderprocessingComponent;
  let fixture: ComponentFixture<ArcadeDependencyfinderprocessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadeDependencyfinderprocessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadeDependencyfinderprocessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
