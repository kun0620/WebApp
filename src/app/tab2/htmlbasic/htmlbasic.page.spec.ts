import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlbasicPage } from './htmlbasic.page';

describe('HtmlbasicPage', () => {
  let component: HtmlbasicPage;
  let fixture: ComponentFixture<HtmlbasicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlbasicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlbasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
