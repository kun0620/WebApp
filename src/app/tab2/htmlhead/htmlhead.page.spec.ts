import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlheadPage } from './htmlhead.page';

describe('HtmlheadPage', () => {
  let component: HtmlheadPage;
  let fixture: ComponentFixture<HtmlheadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlheadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlheadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
