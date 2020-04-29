// FIFO
class Queue {
    constructor() {
        this._queue = {};
        this.count = 0;
        this.start = 0;

    };

    get() {
        return this._queue;
    }
    
    enqueue(value) {
        this._queue[this.count] = value;
        this.count++;
    }

    dequeue() {
        if (this.count === 0) {
            return undefined;
        }
        let result = this._queue[this.start];
        delete this._queue[this.start];
        this.start++;
        this.count--;
        return result; 
    };

    peek() {
        if (this.count === 0) {
            return undefined;
        }
        let key = (Object.keys(this._queue))[0]
        let result = this._queue[key];
        return result;
    }

    empty() {
        this._queue = {};
        this.count = 0;
    }

    size() {
        return this.count;
    }
}

const queue = new Queue();
queue.enqueue('start');
queue.enqueue('mid');
queue.enqueue('last');
console.log(queue.get());
console.log(queue.size());