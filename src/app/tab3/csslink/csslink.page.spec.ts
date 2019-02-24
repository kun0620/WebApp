import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsslinkPage } from './csslink.page';

describe('CsslinkPage', () => {
  let component: CsslinkPage;
  let fixture: ComponentFixture<CsslinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsslinkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsslinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
