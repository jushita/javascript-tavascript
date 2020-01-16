var twoSum = function(nums, target) {
    for (i = 0; i <= nums.length - 1; i ++) {
        for (j = i+1; j <= nums.length - 1; j++) {
            if (nums[i] + nums [j] === target) {    
                return [i,j]
            }
        }
    }
    
};
// console.log(twoSum([2,5,5,11], 10));

var twoSumImproved = function(nums, target) {
    let map = new Map();
    for (let i = 0; i <= nums.length -1; i++) {
        let complement = target - nums[i];
        console.log(complement, nums[i]);
        if (map.has(complement)) {
            console.log(`getting here with ${complement}`)
            return [map.get(complement), i];

        }
        map.set(nums[i], i);
    }
}
console.log(twoSumImproved([2,7,11,15], 9));