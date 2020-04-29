class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
}

const root = new Node('Root');
const child1 = new Node('Child1');
const child2 = new Node('Child2');
const child3 = new Node('Child3');
const child4 = new Node('Child4');

root.children.push(child1);
child1.children.push(child2, child3, child4)

console.log(root)

