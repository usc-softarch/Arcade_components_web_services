import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalletHldaComponent } from './mallet-hlda.component';

describe('MalletHldaComponent', () => {
  let component: MalletHldaComponent;
  let fixture: ComponentFixture<MalletHldaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalletHldaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalletHldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
