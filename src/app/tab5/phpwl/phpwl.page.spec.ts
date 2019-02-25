import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpwlPage } from './phpwl.page';

describe('PhpwlPage', () => {
  let component: PhpwlPage;
  let fixture: ComponentFixture<PhpwlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpwlPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpwlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
