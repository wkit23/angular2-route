import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Order } from '../model/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  order:Order;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      let id = +params['id'];
      this.order = this.orderService.getOrder(id);
      // this.orderService.getOrderFromUrl(id)
      //   .then(resp => this.order = resp );
    });
  }

  goBack() {
    this.location.back();
  }
}
