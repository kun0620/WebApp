import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsstextPage } from './csstext.page';

describe('CsstextPage', () => {
  let component: CsstextPage;
  let fixture: ComponentFixture<CsstextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsstextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsstextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
