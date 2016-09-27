import { OrderItem } from './orderItem';
import { TotalPipePipe } from '../total-pipe.pipe';

export class Order {
    id: number;
    create_time: Date;
    orderNumber: string;
    orderItems: Array<OrderItem>;

    constructor(orderItems:Array<OrderItem> , orderDate:Date) {
        this.id = orderDate.getTime();
        this.create_time = orderDate; 
        this.orderItems = orderItems;
    }

    getTotal():number {
        let pipe = new TotalPipePipe();
        return pipe.transform(this.orderItems);
    }
}