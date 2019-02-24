import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmltablePage } from './htmltable.page';

describe('HtmltablePage', () => {
  let component: HtmltablePage;
  let fixture: ComponentFixture<HtmltablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmltablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmltablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
