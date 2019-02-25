import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqllikePage } from './sqllike.page';

describe('SqllikePage', () => {
  let component: SqllikePage;
  let fixture: ComponentFixture<SqllikePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqllikePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqllikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
