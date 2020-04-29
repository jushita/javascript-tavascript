/** Chris's version */

class Node {
    constructor(data) {
        this.data = data;
        /**
         * @type {Node}
         */
        this.left = null;
        /**
         * @type {Node}
         */
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        /**
         * @type {Node}
         */
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    /**
     *
     * @param {Node} node
     * @param {Node} newNode
     */
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    preorder() {
        this.preOrderHelper(this.root);
    };

    preOrderHelper(root) {
        if(root != null) {
            console.log(root.data);
            this.preOrderHelper(root.left);
            this.preOrderHelper(root.right);
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(3);
tree.insert(4);
tree.insert(1);
tree.preorder();
console.log(tree)

