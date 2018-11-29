import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsDocComponent } from './inputs-doc.component';

describe('InputsDocComponent', () => {
  let component: InputsDocComponent;
  let fixture: ComponentFixture<InputsDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
