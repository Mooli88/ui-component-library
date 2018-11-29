import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsDocComponent } from './buttons-doc.component';

describe('ButtonsDocComponent', () => {
  let component: ButtonsDocComponent;
  let fixture: ComponentFixture<ButtonsDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
