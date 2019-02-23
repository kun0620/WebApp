import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmldetailPage } from './htmldetail.page';

describe('HtmldetailPage', () => {
  let component: HtmldetailPage;
  let fixture: ComponentFixture<HtmldetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmldetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmldetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
