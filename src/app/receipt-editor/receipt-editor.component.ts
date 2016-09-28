import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../model/order';
import { OrderItem } from '../model/orderItem';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-receipt-editor',
  templateUrl: './receipt-editor.component.html',
  styleUrls: ['./receipt-editor.component.css']
})
export class ReceiptEditorComponent implements OnInit {
  order: Order;
  orderDate: string;
  errorMsg: string;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      let id = params['id'];
      if (id == 'new') {
        this.order = new Order([], new Date());
      }
      else {
        this.order = this.orderService.getOrder(id);
      }

      this.orderDate = this.order.create_time.toISOString().substring(0, 10);
    });
  }

  onDateChanged($event:Event) {
    // Update the date back into order
    this.order.create_time = new Date(this.orderDate);
  }

  onSave() {
    if (this.onValidate()) {
      this.orderService.save(this.order);
      this.location.back();
    }
  }

  onAddItem() {
    let newItem = new OrderItem("", 1, 0);
    this.order.orderItems.push(newItem);
  }

  onDeleteItem(orderItem:OrderItem) {
    let index = this.order.orderItems.indexOf(orderItem);
    this.order.orderItems.splice(index, 1);
  }

  onValidate():Boolean {
    if (!this.orderDate) {
      this.errorMsg = "Invalid Date";
      return false;
    }

    if (this.order.orderItems.length == 0) {
      this.errorMsg = "Items need to be 1 item or more";
      return false;
    }

    this.order.orderItems.forEach(orderItem => {
      if (orderItem.name == "") {
        this.errorMsg = "Item name is empty";
        return false;
      }
    });

    this.errorMsg = "";
    return true;
  }

  onCancel() {
    this.location.back();
  }
}
