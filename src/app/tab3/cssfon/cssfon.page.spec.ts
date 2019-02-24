import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssfonPage } from './cssfon.page';

describe('CssfonPage', () => {
  let component: CssfonPage;
  let fixture: ComponentFixture<CssfonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssfonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssfonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
