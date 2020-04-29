class BinarySearch {
    constructor(){}

    binarySearchIterative(arr, x) {
        let start = 0;
        let end = arr.length -1;

        // iterate while start not meets end
        while (start<=end) {
            // find mid
            let mid = Math.floor((start+end)/2);

            // if element present at mid return;
            if(arr[mid] === x) {
                return true;
            }

            // if target is more than mid, look on the right side; else look on left side

            else if (arr[mid] < x) {
                start = mid+1;
            } else {
                end = mid-1;
            }
        }

        return false;
    }

    binarySearchRecursive(arr, x, start, end) {
        // base condition
        if (start > end) return false;

        // find mid index
        let mid = Math.floor((start+end)/2);

        // see if mid indx has the key x
        if(arr[mid] === x) {
            return true;
        }

        // of element at mid is greater than target scan the left
        if(arr[mid] > x) {
            return this.binarySearchRecursive(arr, x, start, mid-1);
        } else {
            return this.binarySearchRecursive(arr, x, mid+1, end)
        }

    }
}

bs = new BinarySearch();
console.log(bs.binarySearchIterative([5,6,7,8,9,10], 11))

console.log(bs.binarySearchRecursive([1,2,3,4,5,6,7], 6, 0, 7))

// time complexity = O(logN)
// space complexity O(1)