/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ReceiptComponent } from './receipt.component';
import { OrderService } from '../order.service';

describe('Component: Receipt', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService]
    });
  });

  it('should create an instance', inject([ActivatedRoute, Location, OrderService], (ad:ActivatedRoute, location:Location, od:OrderService) => {
    let component = new ReceiptComponent(ad, location, od);
    expect(component).toBeTruthy();
  }));
});
