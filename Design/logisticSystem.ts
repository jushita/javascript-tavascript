/**
• The system can take an order to deliver it to a given destination.
• The order will be a list of items and there is a cost of each order to process.
• User has to register himself / herself to use this system.
• User can track his / her order.
• Orders will be shipped by bike or truck, but only a single order will be shipped by a single vehicle.
*/

class LogisticSystem {
    private order;
    private userId;
    private orderId;
    private users;
    constructor(order: Item[]) {
        this.order = order;
        this.userId = 0;
        this.orderId = 0;
        this.users = {
        }
    }

    register(user: User) {
        user = new User(this.userId+1);
        this.users[user.id] = [];
        return user;

    }

    trackOrder(userId: number, orderId: number) {
        let status;
        if(this.users[userId]) {
            status = this.users[userId].status
        } 
        return status;
    }

    placeOrder(item: Item, user: User) {
        if(this.findItem(item.id) && this.users[user.id]) {
            this.users[user.id].push(item);
            this.deliverOrder(this.orderId+1)
        } else {
            throw new Error("Invalid order");
        }

    }

    findItem(itemId: number) {
        for(let i = 0; i < this.order.length; i++) {
            if(this.order[i].itemId === itemId) {
                return true;
            }
        }
        return false;
    }

    deliverOrder(orderId: number) {
        let vehicle = this.setVehicle()
        let status = "Processing"
        let orderToDeliver = new Order(orderId, vehicle, status);
        return orderToDeliver;
    }

    setVehicle() {
        return "bike"
    }
 
}

class Item {
    public id: number; 
    public cost: number;
    public deliveryVehicle: string;
    constructor(id: number, cost: number, deliveryVehicle: string) {
        this.id = id;
        this.cost = cost;
        this.deliveryVehicle = deliveryVehicle;
    }
}

class User {
    public id: string;
    constructor(id: string) {
        this.id = id;
    }
}

class Order {
    public id: number
    public deliveryVehicle: string
    public status: string

    constructor(id: number, deliveryVehicle: string, status: string) {
        this.id = id;
        this.deliveryVehicle = deliveryVehicle;
        this.status = status;
    }
}

class Vehicle {
    public id: number;
    public type: string;

    constructor(id: number, type: string) {
        this.id = id;
        this.type = type;
    }
}