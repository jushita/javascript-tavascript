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
        this.count--;
        let result = this._stack[this.count];
        delete this._stack[this.count];
        return  result;
    }

    peek() {
        if(this.count === 0) {
            return undefined;
        }
        return this._stack[this.count - 1];

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
console.log(stack.peek());
console.log(stack.pop());

console.log(stack)

module.export.Stack;