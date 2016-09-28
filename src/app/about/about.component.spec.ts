/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Location } from '@angular/common';
import { AboutComponent } from './about.component';

describe('Component: About', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent
      ]
    });
  });

  it('should create an instance', inject([AboutComponent], (component) => {
    expect(component).toBeTruthy();
  }));
});
