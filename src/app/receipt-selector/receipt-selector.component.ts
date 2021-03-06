import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../model/order';

@Component({
  selector: 'app-receipt-selector',
  templateUrl: './receipt-selector.component.html',
  styleUrls: ['./receipt-selector.component.css']
})

export class ReceiptSelectorComponent implements OnInit {
  orders:Array<Order>;

  constructor(private orderService:OrderService) {
    this.orders = [];

    // LocalStorage 
    this.orders = orderService.getAllOrder();

    // Promise
    // orderService.getAllOrdersFromUrl()
    //   .then(resp => this.orders = resp );

    // Observable
    // orderService.getAllOrdersFromUrlOb()
    //   .subscribe(resp => this.orders = resp);
  }

  ngOnInit() {
  }

  onLoadDataFromUrl() {
    this.orderService.loadDataFromUrl()
      .subscribe(resp => this.orders = resp);
  }
}
