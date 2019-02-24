import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssbgPage } from './cssbg.page';

describe('CssbgPage', () => {
  let component: CssbgPage;
  let fixture: ComponentFixture<CssbgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssbgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssbgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
