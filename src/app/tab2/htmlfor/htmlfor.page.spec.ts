import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlforPage } from './htmlfor.page';

describe('HtmlforPage', () => {
  let component: HtmlforPage;
  let fixture: ComponentFixture<HtmlforPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlforPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlforPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
