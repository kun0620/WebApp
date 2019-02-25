import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhphomePage } from './phphome.page';

describe('PhphomePage', () => {
  let component: PhphomePage;
  let fixture: ComponentFixture<PhphomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhphomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhphomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
