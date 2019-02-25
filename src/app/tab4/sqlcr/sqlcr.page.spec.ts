import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlcrPage } from './sqlcr.page';

describe('SqlcrPage', () => {
  let component: SqlcrPage;
  let fixture: ComponentFixture<SqlcrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlcrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlcrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
