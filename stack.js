// LIFO
class Stack {
    constructor () {
        this._stack = {};
        this.count = 0;
    }

    push(value) {
        this._stack[this.count] = value;
        this.count++; 
    }

    pop() {
        if(this.count === 0) {
            return undefined;
        }
        this.count--
        let result = this._stack[this._stack[this.count]];
        delete this._stack[this.count];
        return  result;
    }

    empty() {
        this._stack = {}
        this.count = 0;
    }

    size() {
        return this.count;
    }

    swap() {

    }
}

const stack = new Stack();
stack.push('start');
stack.push('mid');
stack.push('end');
stack.pop()
stack.pop()
console.log(stack)