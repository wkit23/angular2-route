import { Pipe, PipeTransform } from '@angular/core';
import { OrderItem } from './model/orderItem';

@Pipe({
  name: 'totalPipe',
  pure: false
})
export class TotalPipePipe implements PipeTransform {

  transform(orderItems: Array<OrderItem>): number {
    let total:number = 0;
    if (!orderItems) {
      return null;
    }
    
    orderItems.forEach(item => {
      total += item.getTotalPrice();
    });

    return total;
  }

}
