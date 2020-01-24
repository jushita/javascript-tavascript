const LEFT = 0;
const RIGHT = 1;

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    insert(data) {
        const newNode = new Node(data);
        if(this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // (leftnode <parent< rightnode )
    insertNode(node, newNode) {
        if(newNode.data < node.data) { 5<6
            if(node.left === null) {
                node.left = newNode;
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    this.insertNode(node.right, newNode)
                }
            }
        }
    }

    findMinNode(node) {
        if(node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }
}