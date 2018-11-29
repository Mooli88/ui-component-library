import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaDocComponent } from './textarea-doc.component';

describe('TextareaDocComponent', () => {
  let component: TextareaDocComponent;
  let fixture: ComponentFixture<TextareaDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
