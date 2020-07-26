import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalletImportfileComponent } from './mallet-importfile.component';

describe('MalletImportfileComponent', () => {
  let component: MalletImportfileComponent;
  let fixture: ComponentFixture<MalletImportfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalletImportfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalletImportfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
