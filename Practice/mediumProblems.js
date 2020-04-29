
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

var threeSum = function(nums) {
    let left = 0;
    let current = left+1;
    let right = nums.length - 1;
    nums = nums.sort((a, b) => a - b);
    let sum = 0;
    let result = {};

    while(left<right) {
        current = left +1;
        right = nums.length - 1;
        while(current < right) {
            sum = nums[left] + nums[current] + nums[right];
            if(sum === 0) {
                result[nums[left], nums[current], nums[right]] = [nums[left], nums[current], nums[right]];
                current++;
                right--;
            } else if (sum < 0) {
                current++;
            } else {
                right--;
            }
        }
        left++;
    }
    return Object.values(result);

};

//console.log(threeSum([-1, 0, 1, 2, -1, -4]))



var searchRangeNaive = function(nums, target) {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            result.push(i)
        }
    };
    if (result.length === 0) {
        return [-1,-1]
    } else if (result.length === 1) {
        return [result[0], result[0]]
    } else if (result.length > 2) {
        return [result[0], result[result.length-1]]
    } else {
        return result;
    }
}
//console.log(searchRangeNaive([1], 1));

var searchRange = function(num, target) {
    let start = 0;
    let end = num.length;
    let index = -1;
    while (start < end) {
        mid = Math.floor((start+end)/2);
        if (num[mid] === target) {
            index = mid;
            break;
        }
        if(num[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        } 
    }
    console.log(index)
    if(index === -1) {
        return [-1,-1]
    }

    let s = index+1
    while (num[s] === target) {
        s++;
    }
    let lastOccurance = s-1;

    s = index -1
    while(num[s] === target) {
        s--
    }

    let firstOccurance = s+1

    return [firstOccurance, lastOccurance]
    
}

// console.log(searchRange([1], 1))


var fourSum = function(nums, target) {
    let result = new Set();
    nums = nums.sort((a,b) => a-b);
    for(let i = 0; i <= nums.length-1; i ++) {
        
    }
    return nums;
};

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0))

// [ -2, -1, 0, 0, 1, 2 ]



var groupAnagrams = function(strs) {
    let map = new Map();
    res = [];
    for(let i = 0; i < strs.length; i++) {
        if(map.has((strs[i].split('').sort().join('')))) {
            let x = map.get((strs[i].split('').sort().join('')));
            x.push(strs[i]);
        }
        else {
            map.set((strs[i].split('').sort().join('')), [strs[i]]);
        }
    }

    for (v of map) {
        res.push(v[1]);
    }
    return res;
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// note: didn't wok for 'abb'
function longestPallindromicSubstring(stri) {
    stri = stri.split('')
    let first = 0;
    let last = stri.length -1;
    let firstOccur = -1; 
    let lastOccur = -1;

    while(first <= last) {
        if(stri[first] === stri[last]) {
            firstOccur = first;
            lastOccur = last;
        } else {
            firstOccur = -1;
            lastOccur = -1;
        }
        console.log(firstOccur, lastOccur)
        first++;
        last--;
    }
    return stri.slice(firstOccur, lastOccur+1).join('');
}

//console.log(longestPallindromicSubstring('dbab'))

var lengthOfLongestSubstring = function(s) {
    let map = new Map;
    result = [];

    s = s.split('');
    for(let i = 0; i <= s.length -1; i++) {
        if (map.has(s[i])) {
            break;
        } else {
            map.set(s[i], s[i])
        }
    } 
    for(v of map) {
        result.push(v[0]);
    }
    return result.join('');
};

//console.log(lengthOfLongestSubstring('pwwkew'))



var maxSumDivThree = function(nums) {
    let windowTotal = 0;

    for(let i = 0; i < nums.length; i++) {       
        if (nums[i] % 3 === 0) {
            windowTotal = nums[i];
            break;
        }
    }
    console.log(windowTotal)
    max = windowTotal;
    let _i = nums.indexOf(windowTotal)
    for(let i=_i; i < nums.length; i++) {
        windowTotal += nums[i];
        console.log(windowTotal)
        max = Math.max(windowTotal, max);
    }

    return max;
};


//console.log(maxSumDivThree([3,6,5,1,8]))


// Doesn't work
var dailyTemperatures = function(T) {
    let stack = [];
    let res = [];
    stack.push(T[0]);
    let pointer = 0;
    for (let i = 1; i <= T.length-1; i++) {
        console.log(T[i], pointer)
        if (T[i] > stack[0]) {
            res.push(stack.length);
            stack.pop();
            pointer++;

            stack.push(T[i]);
            console.log(`pointer is: `)
            console.log(pointer)
        } else {
            stack.push(T[i])
        }
    }
    console.log(stack, res)
};

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))


var countPrimes = function(n) {
    for(let i = 0; i <= n -1; i++) {
       console.log(i%i)
    }
};



// countPrimes(10);

// doesn't work
var divide = function(dividend, divisor) {
    res = 0;
    res_arr = [];
    let isNegative = false;
    if (dividend == 0) {
        return 0;
    }
    if (divisor < 0 && dividend < 0) {
        isNegative = false;
    } else if (divisor < 0) {
        isNegative = true;
        divisor = divisor.toString().substr(1);
        divisor = parseInt(divisor);
    } else if (dividend < 0) {
        isNegative = true;
        dividend = dividend.toString().substr(1);
        dividend = parseInt(dividend)
    }
    for(let i = 1; i <= dividend; i ++) {
        res = res + divisor;
        if(res <= dividend) {
            res_arr.push(i)
        }
    }
    if (isNegative) {
        return (-res_arr[res_arr.length-1])
    } else {
        return res_arr[res_arr.length-1]
    }
};


// console.log(divide(-1, -1));


var numJewelsInStones = function(J, S) {
    let mapOfAvailableJewels = new Map();
    let result = 0

    for (let i = 0; i <= S.length-1; i++) {
        if(mapOfAvailableJewels.has(S[i])) {
            mapOfAvailableJewels.set(S[i], mapOfAvailableJewels.get(S[i])+1);
        } else {
            mapOfAvailableJewels.set(S[i], 1)
        }
    }
    console.log(mapOfAvailableJewels)
    for(let i = 0; i <= J.length-1; i++) {
        if(mapOfAvailableJewels.has(J[i])) {
            result = result + (mapOfAvailableJewels.get(J[i]))
        }
    }
    return result;
};

// console.log(numJewelsInStones("zz", "ZZZZ"))

function getByValue(map, searchVal) {
    for(let [key, value] of map.entries()) {
        if(value === searchVal) {
            return key;
        }
    }
}

var frequencySort = function(s) {
    const map = new Map();
    
    for(let i = 0 ; i < s.length; i++){
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    
    const result = [];
    
    for(let key of map.keys()){
        result.push([key, map.get(key)]);
    }
    result.sort((a, b) => b[1] - a[1]);
    
    let resultStr = '';
    
    for(let i = 0; i < result.length; i++){
        let j = 0;
        
        while(j < result[i][1]){
            resultStr += result[i][0];
            j++;
        }
    }
    
    return resultStr;
};

// console.log(frequencySort("tree"))


var intersection = function(nums1, nums2) {
    let resultMap = new Map();
    let result = [];
    if (nums1.length < nums2.length) {
        large = nums2;
        small = nums1;
    } else {
        large = nums1;
        small = nums2;
    } 
    for (let i = 0; i <= small.length-1; i++) {
        if (large.indexOf(small[i]) >= 0) {
            resultMap.set(small[i], i)
        }
    }
    for(key of resultMap.keys()) {
        result.push(key)
    }
    return result;
};

//console.log(intersection([], [9,4,9,8,4]));

var checkSubarraySum = function(nums, k) {
    let left = 0;
    let right = 1;
    for(let i = 0; i < nums.length-1; i++) {
        console.log(i)
        let totalSum =  (sum(nums.slice(left, right+1)));
        console.log(totalSum)
        if(totalSum > k) {
            console.log(`getting here`)
            left++;
        }
        if(totalSum%k === 0) {
            return true;
        }

        right++;
    }
    return false;
}

function sum(nums) {
    let total = 0;
    if (nums.length === 1) {
        return
    }
    for(let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}


// console.log(checkSubarraySum([23,25,5,3,4], 6));

function numberOfSubarrays(nums, k) {
    let leftWindow = -1;
    let rightWindow = k-1;
    let result = [];
    let ranges = [];
    

    for(let i = 0; rightWindow < nums.length; i++) {
        leftWindow++;
        rightWindow++;
        ranges.push((range(leftWindow, rightWindow)))

    }

    return ranges;
}

function range(start, stop, step =1) {
    return Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
}

console.log(numberOfSubarrays([1,1,2,1,1], 3))









