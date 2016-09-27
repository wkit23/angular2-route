export class OrderItem {
    name: string;
    quantity: number;
    unitPrice: number;
    
    constructor(name:string, quantity:number, unitPrice:number){
        this.name = name;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }


    getTotalPrice() {
        return this.quantity * this.unitPrice;
    }
}