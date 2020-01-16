// FIFO
class Queue {
    constructor() {
        this._queue = {};
        this.count = 0;
    };

    get() {
        return this._queue;
    }
    
    push(value) {
        this._queue[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.count === 0) {
            return undefined;
        }
        let key = (Object.keys(this._queue))[0]
        let result = this._queue[key];
        delete this._queue[key];
        this.count--;
        return result; 
    };

    empty() {
        this._queue = {};
        this.count = 0;
    }

    size() {
        return this.count;
    }
}

const queue = new Queue();
queue.push('start');
queue.push('mid');
queue.push('last');
queue.pop();
queue.pop();
queue.pop();
queue.pop();
console.log(queue);