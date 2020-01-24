class Node {
    constructor(element, next = null) {
        this.element = element;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(element) {
        this.head = new Node(element, this.head);
        this.size++;
    }
    // add element to end of list
    insertLast(element) {
        let node = new Node(element);
        let current;

        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;

    }

    insertAt(element, index) {
        let node = new Node(element);
        let current;
        let previous;

        if (index < 0 || index > this.size - 1) {
            return;
        }

        if(index === 0) {
            this.head = new Node(element, this.head);
        } else {
            current = this.head;
            let count = 0;

            while (count < index) {
                previous = current;
                count++;
                current = current.next;
            }

            node.next = current;
            previous.next = node;

        }

        
        this.size++;

    }

    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if(count == index) {
                console.log(current.element);
            }
            count++;
            current = current.next;
        }

        return null;
    }

    removeAt(index) {
        if(index < 0 || index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0

        if(index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next
        }

        this.size--;

    }

    clearList() {
        this.head = null;
        this.size = 0;
    }

    size() {
        return this.size;
    }

    printList() {
        let current = this.head;
        while(current) {
            let result = current.element;
            current = current.next;
            console.log(result)
        }
    }
}

const ll = new LinkedList();

ll.insertAt(99.5, -1)
ll.printList()
