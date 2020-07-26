import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalletPruneComponent } from './mallet-prune.component';

describe('MalletPruneComponent', () => {
  let component: MalletPruneComponent;
  let fixture: ComponentFixture<MalletPruneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalletPruneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalletPruneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
