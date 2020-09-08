function binarySearchIter(arr, x) {
    let start = 0;
    let end = arr.length-1;

    while(start <= end) {
        let mid = Math.floor((start+end)/2);
        if(x === arr[mid]) return true
        if(arr[mid] < x) start = mid+1;
        else end = mid-1;
    }
    return false;
}

console.log(binarySearchIter([5,6,7,8,9,10], 10))


function binarySearchRecur(arr, x, start, end){
    if(start>end) return false;
    let mid = Math.floor((start+mid)/2);
    if(arr[mid] === x) return true;
    if(arr[mid]<x) binarySearchRecur(arr, x, start, mid-1);
    else binarySearchRecur(arr, x, mid+1, end);
}