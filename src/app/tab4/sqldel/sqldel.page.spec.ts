import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqldelPage } from './sqldel.page';

describe('SqldelPage', () => {
  let component: SqldelPage;
  let fixture: ComponentFixture<SqldelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqldelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqldelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
