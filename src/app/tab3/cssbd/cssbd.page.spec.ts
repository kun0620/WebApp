import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssbdPage } from './cssbd.page';

describe('CssbdPage', () => {
  let component: CssbdPage;
  let fixture: ComponentFixture<CssbdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssbdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssbdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
