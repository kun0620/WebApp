import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlwanPage } from './sqlwan.page';

describe('SqlwanPage', () => {
  let component: SqlwanPage;
  let fixture: ComponentFixture<SqlwanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlwanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlwanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
