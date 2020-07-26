import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalletInfertopicsComponent } from './mallet-infertopics.component';

describe('MalletInfertopicsComponent', () => {
  let component: MalletInfertopicsComponent;
  let fixture: ComponentFixture<MalletInfertopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalletInfertopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalletInfertopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
