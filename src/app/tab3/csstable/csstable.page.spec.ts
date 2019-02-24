import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsstablePage } from './csstable.page';

describe('CsstablePage', () => {
  let component: CsstablePage;
  let fixture: ComponentFixture<CsstablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsstablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsstablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
