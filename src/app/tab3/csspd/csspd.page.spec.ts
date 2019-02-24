import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsspdPage } from './csspd.page';

describe('CsspdPage', () => {
  let component: CsspdPage;
  let fixture: ComponentFixture<CsspdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsspdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsspdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
