// Create a garage management system
// garage has 1 entry point 
// open spots of garage given
// three types of spaces: small medium and large
// upon entering is added to the cars in the garage 
// upon exiting total cost of time spent is calculated
// $1 per minute

class Garage {
    public spotType;
    public bookedSpots;
    constructor(openSpots: Spot[]) {
        this.spotType = {
            small: [],
            medium: [],
            large: []
        };
        this.bookedSpots = {
        }
        this.setTypeOfSpot(openSpots)
    }
    
    setTypeOfSpot(openSpots: Spot[]) {
        for(let i = 0; i < openSpots.length; i++) {
            this.spotType[openSpots[i].type].push(openSpots[i]);
        }
    }

    book(car: Cars, spot: string, timestamp: string) {
        if(this.spotType[car.size].length > 0 && car.size === 'small') {
            this.bookedSpots[spot] = [car, timestamp];
            this.spotType[car.size].pop();
        } else if(car.size === 'medium' && (this.spotType['medium'].length > 0 || this.spotType['large'].length > 0)) {
            this.bookedSpots[spot] = [car, timestamp];
            this.spotType[car.size].pop();
        } else if(car.size === 'large' && this.spotType['large'].length > 0) {
            this.bookedSpots[spot] = [car, timestamp];
            this.spotType[car.size].pop();
        } else {
            throw new Error("Unavailable spot")
        }
        return spot;
    }

    release(spot: string, timestamp: string, cost: number) {
        let totatTime;
        let totalCost;
        if(this.bookedSpots[spot]) {
            totatTime = parseInt(timestamp) - this.bookedSpots[spot][1];
            totalCost = this.calculateCost(totatTime, cost);
        }
        return totalCost;
    }

    calculateCost(totatTime: number, cost: number){
        return totatTime*cost;
    }


}

class Cars {
    id: string;
    size: string;
    constructor(id: string, size: string) {
        this.id = id;
        this.size = size;
    }
}

interface Spot {
    type: string
}