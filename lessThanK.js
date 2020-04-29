var lessThanK = function(nums, k) {
    swap(nums, nums.length-1, nums.indexOf(k));
    let pointer = 0;
    let prev = nums.length - 2;

    helper(nums, k, pointer, prev);
    
    return nums;
}

var helper = function(nums, k, pointer, prev) {
    if (nums[pointer] === k) {
        return;
    }

    if (nums[prev] > k) {
        let i = prev;
        let j = prev + 1;
        swap(nums, i, j);
        prev--;
    } else {
        if(nums[pointer] < k) {
            pointer++;
        } else {
            swap(nums, pointer, prev);
        }
    }

    helper(nums, k, pointer, prev);
}

// function to swap index i and j in array nums
var swap = function(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

swap([1,2,3,4,5,6], 1,4)

console.log(lessThanK([35,70,80,7,100,90,73,80,30], 73));