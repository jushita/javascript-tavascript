// Implement a set

class Set {
    constructor() {
        this._set = {};
        this.count = 0;
    }
    add(value) {
        if (!this.has(value)) {
            this.count++;
        }
        this._set[value] = null;
    }

    delete(value) {
        if(this.has(value)){
            delete this._set[value];
            this.count--;
        }        
    }

    clear() {
        this._set = {};
    }

    has(value) {
        return this._set.hasOwnProperty(value);
    }

    size() {
        return this.count;
    }
}

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.delete(1)
set.clear()
console.log(set)
