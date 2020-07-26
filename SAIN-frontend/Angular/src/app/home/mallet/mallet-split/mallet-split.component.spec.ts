import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalletSplitComponent } from './mallet-split.component';

describe('MalletSplitComponent', () => {
  let component: MalletSplitComponent;
  let fixture: ComponentFixture<MalletSplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalletSplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalletSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
