import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlbaPage } from './sqlba.page';

describe('SqlbaPage', () => {
  let component: SqlbaPage;
  let fixture: ComponentFixture<SqlbaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlbaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlbaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
