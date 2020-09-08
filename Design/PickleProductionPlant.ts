// Pickle production plant  
// everyday i produce pickles and i have to fill orders for all cusomers 
// cusomers come through out day to pick pickles; each customer has a pre ordered pickle form $0.50
// I need a system when customer comes to pick pickles I need to be able to remove pickles from inventory, charge customers;
// certain number of employees
// package pickles based on ordered
// 1 employee can package 5 pickles per minute 10 employees;
// beginning of day I want pack orders from biggest to smallest orders
// orders for next day;
// max order size 2400

class PickleProductionPlant {
    private inventory;
    private orders;
    private price;
    private employee;
    private totalSold;
    private ordersToPack;
    private ordersRemaining;
    private peakPickles;
    constructor(inventory: number, orders: Order[], price: number, employee: number) {
        this.inventory = inventory;
        this.orders = orders;
        this.price = price;
        this.employee = employee;
        this.totalSold = 0;
        this.ordersToPack = [];
        this.ordersRemaining = [];
        this.peakPickles = this.processPeakPicklePackagePortion()

    }

    processPeakPicklePackagePortion() {
        return this.employee*8*60*5;
    }

    packagePickle(orders: Order[]) {
        orders.sort((a,b) => b.amount - a.amount);
        for(let i = 0; i< orders.length; i++) {
            if(orders[i].amount <= this.peakPickles && this.totalSold+orders[i].amount <= this.peakPickles) {
                this.ordersToPack.push(orders[i]);
                this.totalSold += orders[i].amount;
            } else {
                this.ordersRemaining.push(orders[i]);
            }
         } 
    }

    remainingOrders() {
        return this.ordersRemaining;
    }


    pickupPickle(order: Order) {
        if(this.ordersRemaining.has[order.id]) {
            throw new Error(`Sorry order not ready yet!`);
        }
        if(!this.ordersToPack.has(order.id)) {
            throw new Error(`Invalid order`);
        }
        this.inventory = this.inventory - order.amount;
        if(this.ordersToPack.has(order.id)) {
            this.ordersToPack.remove(order.id)
        }
        return this.calculateCost(order);
    }

    calculateCost(order: Order) {
        return (order.amount*this.price);
    }
}


class Order {
    public id: string;
    public customerName: string;
    public amount: number;

    constructor(id: string, customerName: string, amount: number) {
        this.id = id;
        this.customerName = customerName;
        this.amount = amount;
    }

    
}

