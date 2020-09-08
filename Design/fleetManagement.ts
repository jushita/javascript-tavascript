class FleetManagement {
    public available;
    public inUse;
    constructor(cars: Carss[]) {
        this.available = {
            economy: [],
            luxury: []
        };
        this.inUse = {};
        
        this.setType(cars);
    }
    
    setType(cars: Carss[]) {
        for(let i = 0; i < cars.length; i++) {
            if(cars[i].type === 'luxury') {
                this.available['luxury'].push(cars[i]);
            } else {
                this.available['economy'].push(cars[i]);
            }
        }
    }
    
    isAvailable(type) {
        if (this.available[type].length > 0) {
            return true;
        }
        
        return false;
    }
    
    bookCar(type) {
        if (!this.isAvailable(type)) {
            return null;
        }
        
        const car = this.available[type].pop();
        this.inUse[car.id] = car;
        
        return car;
    }
    
    returnCar(id) {
        this.available[this.inUse[id].type].push(this.inUse[id]);
        
        delete this.inUse[id];
    }
    
    addCarToFleet(car) {
        this.available[car.type].push(car);
    }
    
    removeCarFromFleet(car) {
        
    }
}

class Carss {
    id: string;
    type: string;
    
    constructor(id: string, type: string) {
        this.id = id;
        this.type = type;
    }
}

