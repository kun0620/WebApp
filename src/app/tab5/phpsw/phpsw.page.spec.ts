import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpswPage } from './phpsw.page';

describe('PhpswPage', () => {
  let component: PhpswPage;
  let fixture: ComponentFixture<PhpswPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpswPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpswPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
