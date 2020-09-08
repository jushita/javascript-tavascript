// Design an OO parking lot. What classes and functions will it have. It should say, full, 
// empty and also be able to find spot for Valet parking. 
// The lot has 3 different types of parking: regular, handicapped and compact.


// Use Case:

// 1. Customer are given a ticket that they can use to redeem to get their vehicle back 

// 2. Parking spots come in three sizes, small, med, large 

// 3. Thee types of vehicles, small[Two Wheeler], med[Car], large[Bus] 

//     -a small vehicle can park in a small, medium, and large spot 

//     -a medium vehicle can park in a medium and large spot 

//     -a large vehicle can park in a large spot

// 4. There are multiple entry gate to park vehicle. So Vehicle should asign nearest posible parking spot



class ParkingLot {
    public availableParking: AvaiableParking;
    public ticketIssued;
    public nextTicketId;
    constructor(parking: Parking[]) {
        this.nextTicketId = 0;
        this.availableParking = {
            regular: {
                small: [],
                medium: [],
                large: []

            },
            handicap: {
                small: [],
                medium: [],
                large: []
            },
            compact: {
                small: [],
                medium: [],
                large: []
            }
        
        }
        this.ticketIssued = {};
        this.setAvailableParking(parking);
    }

    setAvailableParking(parking: Parking[]) {
        for(let i = 0; i < parking.length; i++) {
            this.availableParking[parking[i].type][parking[i].size].push(parking[i]); 
        }
    }

    getTicket(car: Car, type: string, size: string) {
        if(this.availableParking[type][size].length > 0 && car.size === 'small') {
            this.issueTicket(type, size);
        } else if(car.size == 'medium' && (this.availableParking['medium'][size].length > 0 || this.availableParking['large'][size].length > 0)) {
            this.issueTicket(type, 'medium')
        } else if (car.size == 'large' && this.availableParking['large'][size].length > 0) {
            this.issueTicket(type, 'large');
        }
        else {
            throw new Error('Unavailable');
        }
    }

    issueTicket(type: string, size: string) {
        let parking = this.availableParking[type][size].pop() as Parking;
        let ticketId = this.nextTicketId;
        let ticket = new Ticket(ticketId, parking);
        this.nextTicketId++;
        this.ticketIssued[ticketId] = parking;
        return ticket;
    }

    redeemTicket(ticket: Ticket) {
        if(this.ticketIssued[ticket.id]) {
            let parking = this.ticketIssued[ticket.id];
            this.availableParking[parking.type][parking.size];
            delete this.ticketIssued[ticket.id];
        } else {
            throw new Error('Ticket not valid')
        }
    }
}

class Parking {
    id: string;
    type: string;
    size: string;
    constructor(id: string, type: string, size: string) {
        this.id = id;
        this.size = size;
        this.type = type;
    }
}

class Car {
    id: string;
    size: string;
}


class Ticket {
    id: string;
    parking: Parking;
    constructor(id: string, parking: Parking) {
        this.id = id;
        this.parking = parking;
    }
}

interface AvaiableParking {
    regular: AvaiableSizes;
    handicap: AvaiableSizes;
    compact: AvaiableSizes;
}

interface AvaiableSizes {
    small: Parking[];
    medium: Parking[];
    large: Parking[];
}

