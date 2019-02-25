import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpifPage } from './phpif.page';

describe('PhpifPage', () => {
  let component: PhpifPage;
  let fixture: ComponentFixture<PhpifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpifPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
