import { Injectable } from '@angular/core';
import { Operator, Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Order } from './model/order';
import { OrderItem } from './model/orderItem';

const LOCAL_KEY:string = "order_key";
const ORDERS = [
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
const URL:string = "data/order.json";

@Injectable()
export class OrderService {
  private _orders:Array<Order>;

  constructor(private http:Http) {
    this.load();
  }

  getAllOrder():Array<Order> {
    return this._orders;
  }

  getAllOrdersFromUrl():Promise<Array<Order>> {
    return this.http.get(URL).toPromise()
      .then(resp => this.loadData(resp.json()))
      .catch(reason => []);
  }

  getAllOrdersFromUrlOb():Observable<Array<Order>> {
    return this.http.get(URL)
      .map(resp => {
        return this.loadData(resp.json());
      });
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

  getOrderFromUrl(id?:number):Promise<Order> {
    return this.getAllOrdersFromUrl().then(list => {
      return list.find(item => {
        return item.id == id;
      });
    });
  }

  loadDataFromUrl():Observable<Array<Order>> {
    let ob = this.getAllOrdersFromUrlOb();
    ob.subscribe(resp => {
      this._orders = resp;
      this.save();
    });

    return ob;
  }

  save(order?:Order) {
    // additional save the order into the list
    if (order) {
      let index = this._orders.findIndex(item => {
        return item.id == order.id;
      });
      if (index > -1) {
        this._orders[index] = order;
      }
      else {
        this._orders.push(order);
      }
    }

    let localData = JSON.stringify(this._orders);
    localStorage[LOCAL_KEY] = localData;
  }

  load():Array<Order> {
    let localData = localStorage[LOCAL_KEY];
    let objData;
    if (typeof(localData) == "undefined") {
      this._orders = this.loadData(ORDERS);
      this.save();
    }
    else {
      objData = JSON.parse(localData);
      this._orders = this.loadData(objData);
    }
    return this._orders;
  }

  loadData(orders_json_array:Array<any>){
    let orders:Array<Order> = [];
    orders_json_array.forEach( (orderItem, index, arr)=>{
      let items:Array<OrderItem> = []
      orderItem.orderItems.forEach( item =>{
        items.push(new OrderItem(item.name, item.quantity, item.unitPrice))
      })
      let order = new Order(items, new Date(orderItem.create_time))
      order.id = orderItem.id;
      orders.push(order);
    } )
    return orders;
  }
}
