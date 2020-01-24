class Node {
    constructor(element, prev=null, next=null) {
        this.element = element;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    push(element) {
        let node = new Node(element)
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.tail;
            this.tail = node;
            node.prev = temp;
            temp.next = node;
        }
        this.length++;
        return this;
    }

    pop() {

        if(!this.head) {
            return undefined;
        } 
        let temp = this.tail
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return this;
    }
    
    unshift(element) {
        let node = new Node(element);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.head;
            this.head = node;
            node.next = temp;
            temp.prev = node;
        }
        this.length++;
        return this;
    }

    shift() {
        if(!this.head) {
            return undefined;
        }
        let temp = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return this;
    }

    insert(index, element) {
        if(index < 0 || index > this.length) return false;
        let node = new Node(element);
        if (index === 0) return !!this.unshift(node);
        if (index === this.length) return !!this.push(node);

        let current = this.head;
        let counter = 0;

        while (counter !== index) {
            current = current.next;
            counter++;
        }
        let temp = current;
        let prev = temp.prev;
        prev.next = node;
        node.next = temp;
        node.prev = prev;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.shift();
        if(index === this.length-1) return !!this.pop();

        let current = this.head;
        let counter = 0;

        while(counter !== index) {
            current = current.next;
            counter++;
        }

        let prev = current.prev;
        let next = current.next;
        prev.next = next;
        next.prev = prev;
        this.length--;
        return true;
    }



}

let dl = new DoublyLinkedList;

dl.insert(0, 'first')
dl.push(1);
dl.push(2);
dl.push(3);
dl.remove(0);
dl.remove(0);
dl.remove(1);
dl.remove(0);
dl.remove(0)

console.log(dl)