import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpflPage } from './phpfl.page';

describe('PhpflPage', () => {
  let component: PhpflPage;
  let fixture: ComponentFixture<PhpflPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpflPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpflPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
