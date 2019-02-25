import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlwhPage } from './sqlwh.page';

describe('SqlwhPage', () => {
  let component: SqlwhPage;
  let fixture: ComponentFixture<SqlwhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlwhPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlwhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
