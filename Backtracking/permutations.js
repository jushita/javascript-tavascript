var permute = function(nums) {
    let output = [];
    backtrack(nums, 0, nums.length, output);
    return output;
}

var backtrack = function(nums, start, n, output) {
    if(start === n) {
        return output.push([...nums]);
    } else {
        for(let i = start; i < n; i++) {
            let a = nums[start];
            let b = nums[i];

            nums[start] = b;
            nums[i] = a;

            backtrack(nums, start+1, n, output);

            nums[start] = a;
            nums[i] = b;
        }
    }
}