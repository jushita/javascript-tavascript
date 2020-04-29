var twoSum = function(nums, k) {
    let complement;
    let set = new Set();
    for(let i = 0; i <= nums.length-1; i++) {
        complement = k-nums[i];
        if(set.has(complement)) {
            return ([nums[i], complement]);
        } else {
            set.add(nums[i])
        }
    }
    return -1
}

console.log(twoSum([1,2,3,4,5], 8));