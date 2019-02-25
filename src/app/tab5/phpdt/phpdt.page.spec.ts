import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpdtPage } from './phpdt.page';

describe('PhpdtPage', () => {
  let component: PhpdtPage;
  let fixture: ComponentFixture<PhpdtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpdtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpdtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
