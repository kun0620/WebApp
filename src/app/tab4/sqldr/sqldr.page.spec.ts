import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqldrPage } from './sqldr.page';

describe('SqldrPage', () => {
  let component: SqldrPage;
  let fixture: ComponentFixture<SqldrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqldrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqldrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
