class Node {
    constructor(element, next = null) {
        this.element = element;
        this.next = next;
    }
}
// ITS BROKEN :(
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(element) {
        this.head = new Node(element, this.head);
        this.tail = this.head;
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

        if (index < 0 || index > this.size) {
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

    insertLast2(element) {
        let node = new Node(element);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;


    }
}

const ll = new LinkedList();

ll.insertFirst(99.5)
ll.insertLast2(2)
ll.insertLast2(1)
ll.insertFirst(0)
ll.insertAt(22, 1)
ll.insertAt(9999, 5)
ll.insertLast2(8)
ll.printList()

