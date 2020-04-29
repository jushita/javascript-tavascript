function ListNode(val) {
    this.val = val;
    this.next = null;
}

var removeElements = function(head, val) {
    let node = new ListNode(val);
    let current = node;
    while (current) {
        current = current.next;
    }

}

console.log(removeElements([1,2,3,4,5]))