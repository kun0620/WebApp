import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlinPage } from './sqlin.page';

describe('SqlinPage', () => {
  let component: SqlinPage;
  let fixture: ComponentFixture<SqlinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
