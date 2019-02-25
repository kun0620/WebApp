import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlobPage } from './sqlob.page';

describe('SqlobPage', () => {
  let component: SqlobPage;
  let fixture: ComponentFixture<SqlobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlobPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
