import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDocComponent } from './select-doc.component';

describe('SelectDocComponent', () => {
  let component: SelectDocComponent;
  let fixture: ComponentFixture<SelectDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
