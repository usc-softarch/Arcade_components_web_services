import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalletTraintopicsComponent } from './mallet-traintopics.component';

describe('MalletTraintopicsComponent', () => {
  let component: MalletTraintopicsComponent;
  let fixture: ComponentFixture<MalletTraintopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalletTraintopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalletTraintopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
