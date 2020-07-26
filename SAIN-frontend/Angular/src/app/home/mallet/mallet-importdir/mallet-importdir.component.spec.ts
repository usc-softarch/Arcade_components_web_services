import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalletImportdirComponent } from './mallet-importdir.component';

describe('MalletImportdirComponent', () => {
  let component: MalletImportdirComponent;
  let fixture: ComponentFixture<MalletImportdirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalletImportdirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalletImportdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
