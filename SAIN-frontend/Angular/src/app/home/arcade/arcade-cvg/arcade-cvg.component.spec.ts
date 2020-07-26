import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeCvgComponent } from './arcade-cvg.component';

describe('ArcadeCvgComponent', () => {
  let component: ArcadeCvgComponent;
  let fixture: ComponentFixture<ArcadeCvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadeCvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadeCvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
