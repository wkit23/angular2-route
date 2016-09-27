import { Injectable } from '@angular/core';
import { Order } from './model/order';
import { OrderItem } from './model/orderItem';

@Injectable()
export class OrderService {

  constructor() { }

  getAllOrder():Array<Order> {
    return [
      new Order([
        new OrderItem('Samsung Note7',1,2490),
        new OrderItem('MacBook',1,4900),
        new OrderItem('Ipad Mini',1,1450)
      ], new Date("2016-01-01")),
      new Order([
        new OrderItem('Samsung Note7',2,2490),
        new OrderItem('MacBook',2,4900),
        new OrderItem('Ipad Mini',2,1450)
      ], new Date("2016-01-02")),
      new Order([
        new OrderItem('Samsung Note7',3,2490),
        new OrderItem('MacBook',3,4900),
        new OrderItem('Ipad Mini',3,1450)
      ], new Date("2016-01-03"))
    ];
  }

  getOrder(id?:number):Order {
    let allOrders = this.getAllOrder();
    if (id) {
      return allOrders.find(item => {
        return item.id == id;
      });
    } 
    else {
      return allOrders[0];
    }
  }
}
