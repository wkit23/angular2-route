import { Component } from '@angular/core';
import { Order } from './model/order';
import { OrderItem } from './model/orderItem';

import { OrderService } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  order:Order;

  constructor(orderService:OrderService) {
    this.order = orderService.getOrder();
  }
}
