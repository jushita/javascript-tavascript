combinationSum = function(nums, target) {
    let list = [];
    backtrack(list, [], nums, target, 0);
    return output;
}


backtrack = function(list, tempList, nums, remain, start) {
    if(remain < 0) return;
    else if(remain === 0) output.push(tempList);
    else {
        for(let i = start; i < nums.length; i++) {
            tempList.push(nums[i]);
            backtrack(list, tempList, nums, remain-nums[i], i);
            tempList.pop();
        }
    }
}



// base case
// try to solve it
// reset it
