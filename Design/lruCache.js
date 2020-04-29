class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if(!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.put(key, value);
        return value;
    };

    put(key, value) {
        if(this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);

        if(this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
    };
}


const lru = new LRUCache(10);

console.log(lru.get('item1'));
console.log(lru.put('item1', 'val1'));
console.log(lru.get('item1'));

module.exports = lru;