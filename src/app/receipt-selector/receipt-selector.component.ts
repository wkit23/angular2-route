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

  constructor(orderService:OrderService) { 
    this.orders = orderService.getAllOrder();
  }

  ngOnInit() {
  }

}
