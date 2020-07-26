import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodemaatVcsComponent } from './codemaat-vcs.component';

describe('CodemaatVcsComponent', () => {
  let component: CodemaatVcsComponent;
  let fixture: ComponentFixture<CodemaatVcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodemaatVcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodemaatVcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
