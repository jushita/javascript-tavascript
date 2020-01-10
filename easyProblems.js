var twoSum = function(nums, target) {
    for (i = 0; i <= nums.length - 1; i ++) {
        for (j = i+1; j <= nums.length - 1; j++) {
            console.log(i,j)    
            if (nums[i] + nums [j] === target) {    
                return [i,j]
            }
        }
    }
    
};
console.log(twoSum([2,5,5,11], 10));