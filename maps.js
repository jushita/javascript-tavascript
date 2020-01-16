// Implement Javascript Maps

class Map {
    constructor() {
        this._map = {};
    }

    set(key, value) {
        this._map[key] = value;
    }

    get(key) {
        return this._map[key];
    }

    delete(key) {
        delete this._map[key];
    }

    clear() {
        this._map = {};

    }

    has(key) {
        return this._map.hasOwnProperty(key);
    }

    foreach(cb) {
        let keys = Object.keys(this._map);
        keys.forEach(key => {
            cb(key, this._map);
        });
    }
}

const map = new Map();
map.set('dededede', 1);
map.set('donkeykong', 2);
map.set('bowser', 3);
let _get = map.get('bowser');
map.delete('bowser');

map.foreach(key => {
    console.log(map.get(key));
})
