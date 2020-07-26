import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadePkgComponent } from './arcade-pkg.component';

describe('ArcadePkgComponent', () => {
  let component: ArcadePkgComponent;
  let fixture: ComponentFixture<ArcadePkgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadePkgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadePkgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
