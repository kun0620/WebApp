import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsscolPage } from './csscol.page';

describe('CsscolPage', () => {
  let component: CsscolPage;
  let fixture: ComponentFixture<CsscolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsscolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsscolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
