import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadePipeextractorComponent } from './arcade-pipeextractor.component';

describe('ArcadePipeextractorComponent', () => {
  let component: ArcadePipeextractorComponent;
  let fixture: ComponentFixture<ArcadePipeextractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadePipeextractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadePipeextractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
