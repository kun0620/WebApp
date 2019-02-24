import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmllinkPage } from './htmllink.page';

describe('HtmllinkPage', () => {
  let component: HtmllinkPage;
  let fixture: ComponentFixture<HtmllinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmllinkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmllinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
