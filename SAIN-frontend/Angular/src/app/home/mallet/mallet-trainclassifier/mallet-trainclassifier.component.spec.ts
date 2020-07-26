import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalletTrainclassifierComponent } from './mallet-trainclassifier.component';

describe('MalletTrainclassifierComponent', () => {
  let component: MalletTrainclassifierComponent;
  let fixture: ComponentFixture<MalletTrainclassifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalletTrainclassifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalletTrainclassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
