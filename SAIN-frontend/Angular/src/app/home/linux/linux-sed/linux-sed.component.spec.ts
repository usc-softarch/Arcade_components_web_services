import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxSedComponent } from './linux-sed.component';

describe('LinuxSedComponent', () => {
  let component: LinuxSedComponent;
  let fixture: ComponentFixture<LinuxSedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinuxSedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxSedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
