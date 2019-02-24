import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlimgPage } from './htmlimg.page';

describe('HtmlimgPage', () => {
  let component: HtmlimgPage;
  let fixture: ComponentFixture<HtmlimgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlimgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlimgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
