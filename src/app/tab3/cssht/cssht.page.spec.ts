import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsshtPage } from './cssht.page';

describe('CsshtPage', () => {
  let component: CsshtPage;
  let fixture: ComponentFixture<CsshtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsshtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsshtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
