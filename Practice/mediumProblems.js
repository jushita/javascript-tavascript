
// Implement an algorithm to determine if a string has all unique characters 
// What if you can not use additional data structures?

var findDuplicates = function(nums) {
    let _map = new Map();
    for(i=0; i < nums.length; i++) {
        if(_map.has(nums[i])) {
            return false
        }
        _map.set(nums[i], 0);
    }
    return true;
};

// console.log(findDuplicates([4,3,7,8,2,1]));

// Given a 32-bit signed integer, reverse digits of an integer.

var reverse = function(x) {

    
}


// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

var maxSubArray = function(nums) {
    
};


// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.


var removeDuplicates = function(S) {
    let _stack = [];
    for(let i = 0; i < S.length; i++) {
        if(_stack[_stack.length-1] === S[i]) {
            _stack.pop();
        } else {
            _stack.push(S[i]);

        }
    }
    return (_stack.join(''))
};



//console.log(removeDuplicates('abbaca'));


// ab aB Ab AB 00 01 10 11
// abc Abc ABc aBC ABC aBc Abc abC

// 000 111





