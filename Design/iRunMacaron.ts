/** Macaroon shop
buy Macaroon
each day certain number of certain Macaroon: 5 types
keep track of top selling Macaroon for the day: 
keep track of sale for the day dollar amount
each macaroon $1
*/

class MagicalMacaroonStore {
    public macaroonSold;
    public totalSold;
    public price;
    public topMacaroon;
    public macaroonInventory;
    constructor(macaroonInventory, price) {
        this.macaroonSold = new Map();
        this.totalSold = 0;
        this.price = price;
        this.topMacaroon = ['', 0]; 
        this.macaroonInventory = macaroonInventory
    }

    sell(macaroon: string) {
        if(this.macaroonInventory.has(macaroon)) {
            this.macaroonInventory.set(macaroon, this.macaroonInventory.get(macaroon) - 1);
            if(!this.macaroonSold.get(macaroon)) this.macaroonSold.set(macaroon, 1);
            else this.macaroonSold.set(macaroon, this.macaroonSold.get(macaroon)+1);
            if(this.macaroonSold.get(macaroon) > this.topMacaroon[1]) {
                this.topMacaroon = [macaroon, this.macaroonSold.get(macaroon)];
            } 
            this.totalSold++;
        } else {
            throw new Error("Sorry Macaroon not available!");
        }
    }

    getTopMacaroon() {
        return this.topMacaroon[0];
    }

    totalIncome() {
        return this.totalSold*this.price;
    }

}
