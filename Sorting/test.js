function mergeSort(array) {
    if(array.length < 2) return array;
    const middle = Math.floor(array.length/2);
    const left = arrary.slice(0, middle);
    const right = array.slice(middle, array.length);
    return merge(mergeSort(left), mergeSort(right));
}

function mmerge(left, right) {
    let result = []
    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while(left.length) result.push(left.shift())
    while(right.length) result.push(right.shift())

    return result;
}


function merge(left, right) {
    if(!left) return right;
    if(!right) return left;
    else if(left.val < right.val) {
        left.next = merge(left.next, right);
        return left
    } else {
        right.next = merge(lft, right.next)
        return right;
    }
}





function binSearch(lists, start, end) {
    if(start===end) return lists[start];
    else if(start<end) {
        const mid = parseInt((start+end)/2);
        const left = binSearch(lists, start, mid);
        const right = binSearch(lists, mid+1, end);
        return merge(left, right)
    } else {
        return null
    }
}






function mergeKLists(lists) {
    return binSearch(lists, 0, lists.length-1);
}