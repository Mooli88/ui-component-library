import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonsDocComponent } from './radio-buttons-doc.component';

describe('RadioButtonsDocComponent', () => {
  let component: RadioButtonsDocComponent;
  let fixture: ComponentFixture<RadioButtonsDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonsDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
