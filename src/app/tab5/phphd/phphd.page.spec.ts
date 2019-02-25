import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhphdPage } from './phphd.page';

describe('PhphdPage', () => {
  let component: PhphdPage;
  let fixture: ComponentFixture<PhphdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhphdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhphdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
