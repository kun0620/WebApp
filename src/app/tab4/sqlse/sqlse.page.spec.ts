import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlsePage } from './sqlse.page';

describe('SqlsePage', () => {
  let component: SqlsePage;
  let fixture: ComponentFixture<SqlsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlsePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
