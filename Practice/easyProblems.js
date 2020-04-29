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
//console.log(twoSumImproved([2,7,11,15], 9));



// 167. Two Sum II - Input array is sorted


var twoSumTwoPointerWay = function(numbers, target) {
    let start = 0;
    let end = numbers.length-1;
    numbers= numbers.sort((a,b) => a-b);
    while(start < end) {
        if(numbers[start] + numbers[end] === target) {
            return [start+1, end+1];
        } else if( numbers[start] + numbers[end] < target) {
            start++;
        } else {
            end--;
        }
    }
};


//console.log(twoSumTwoPointerWay([34,23,1,24,75,33,54,8], 58));


// Given an array A of integers and integer K, 
// return the maximum S such that there exists i < j with A[i] + A[j] = S and S < K. If no i, j exist satisfying this equation, return -1.

var twoSumLessThanK = function(A, K) {
    A=A.sort((a, b) => a - b);
    let start = 0;
    let end = A.length-1;
    let stack = [];

    while (start < end) {
        if(A[start] + A[end] < K) {
            if(stack[stack.length-1] === undefined) {
                stack.push(A[start] + A[end]);
            }
            if(stack[stack.length-1] <= (A[start] + A[end])) {
                stack.pop();
                stack.push(A[start] + A[end]);
            } 
            start++;
        } else {
            end--;
        }
    }
    if (stack[0]===undefined) {
        return -1
    }
    else {
        return stack[0];
    }
};


// [ 1, 8, 23, 24, 33, 34, 54, 75 ]
// console.log(twoSumLessThanK([10,20,30], 15))


/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanKUsingMaxSum = function(A, K) {
    A = A.sort((a, b) => a - b);
    let start = 0;
    let end = A.length-1;
    let maxSum = -Infinity;

    while (start < end) {
        let currentSum = A[start] + A[end];
        if (currentSum < K) {
            if (currentSum > maxSum) {
                maxSum = currentSum;
            } 
            start++;
        } else {
            end--;
        }
    }
    
    // [ 1, 8, 23, 24, 33, 34, 54, 75 ]
    if (maxSum == -Infinity) {
        return -1;
    }
    
    return maxSum;
};


var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    s = s.split('');
    let left = 0;
    let right = s.length -1;
    while(left<right) {
        if(s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;

}

// console.log(isPalindrome('race a car'))


// 387. First Unique Character in a String
var firstUniqChar = function(s) {
    let result = -1;
    if (s == "") return result;
    if (s.length == 1) return 0;
  
    let charCounts = new Map();
    let indexTracker = new Map();
    for (let i = 0; i < s.length; i++) {
      if (charCounts.has(s[i])) {
        charCounts.set(s[i], charCounts.get(s[i]) + 1);
        indexTracker.delete(s[i]);
      } else {
        charCounts.set(s[i], 1);
        indexTracker.set(s[i], i);
      }
    }
    return indexTracker.size > 0 ? indexTracker.values().next().value : -1;
  };

//console.log(firstUniqChar("lleeeetcode"));


var firstUniqCharT = function(s) {
    let _map = new Map();
    let _index = new Map();
    if(s.length == 1) {
        return 0;
    }
    if(s === "") {
        return result;
    }
    for(let i = 0; i < s.length; i++) {
        if(_map.has(s[i])) {
            _map.set(s[i], _map.get(s[i]) + 1);
            _index.delete(s[i])
        } else {
            _map.set(s[i], 1);
            _index.set(s[i], i);
        }
    }

    
    if(_index.size === 0) {
        return -1;
    } else {
        return _index.values().next().value;
    }


}



//console.log(firstUniqCharT('aba'));



var singleNumber = function(nums) {
    let _map = new Map();
    for(let i = 0; i <nums.length; i++) {
        if (_map.has(nums[i])) {
            _map.delete(nums[i]);
        } else {
            _map.set(nums[i], nums[i])
        }
    }
    if(_map.length === 0) {
        return -1;
    } else {
        return _map.values().next().value;
    }
};

//console.log(singleNumber([1,1,2]))



var findUniqueNumber = function(nums) {
    nums.reduce((acc, num) => {
        acc ^ num;
    });
}


var findUnique = function(nums) {
    let num;

    for(let i = 0; i <= nums.length-1; i++) {
        num=num^nums[i];
    }
   // console.log(num);
}

findUnique([1,1,2, 2]);


var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const map = {};
    
    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    }
    
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]]) map[t[i]]--;
        else return false;    
    }

    return true;
};

//console.log(isAnagram('aba', 'aba'));

var uniqueOccurrences = function(arr) {
    let map = new Map();
    let count = [];

    for(let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i])+1)
        } else {
            map.set(arr[i], 1)
        }   
    }
    count = Array.from( map.values() );
    let distict = [...new Set(count)]
    if(count.length !== distict.length) {
        return false;
    } else return true;
    

}
//console.log(uniqueOccurrences([1]));

var isPalindromeNum = function(num) {
    num = String(num).split('')
    let left = 0;
    let right = num.length -1;

    while (left<right) {
        if (num[left] !== num[right]) {
            return false
        }
        left++;
        right--;
    }
    return true
}

//console.log(isPalindromeNum(121));



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var isPalindromeLinkedList = function(head) {
    let num = [];
    let current = head;
    while(current) {
        num.push(current.val)
        current = current.next
    }
    let left = 0;
    let right = num.length - 1;

    while(left<right) {
        if (num[left] !== num[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;


};


// console.log(isPalindromeLinkedList([1,2,2]))


var reverseWords = function(s) {
    s = s.replace(/\s+/g, ' ').trim().split(' ')
    console.log(s)
    newLine = [];
    for(let i = s.length-1; i>=0; i--) {
        console.log(s[i])
        newLine.push(s[i]);
    }    
    return newLine.join(' ');
};

//console.log(reverseWords('    the sky    is blue    '))


var addStrings = function(num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    
    return num1 + num2
 };


 // console.log(addStrings('1', '2'))


var merge = function(nums1, m, nums2, n) {
    let result = [];
    let nums = nums1.slice(0, m)
    while(nums.length && nums2.length) {
        if(nums[0] <= nums2[0]) {
            result.push(nums.shift());
        } else {
            result.push(nums2.shift());
        }
    }
    while(nums.length) result.push(nums.shift());
    while(nums2.length) result.push(nums2.shift());

    return result;
};

//console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))

var plusOneExtra = function (digits) {
    let output = [];
    let carriedValue = 1;
    
    for (let i = digits.length - 1; i >= 0; i--) {
        const sum = digits[i] + carriedValue;
        carriedValue = 0;
        
        if (sum >= 10) {
            carriedValue = 1;
            output.unshift(sum % 10);
        } else {
            output.unshift(sum);
        }
        
        if (i === 0 && carriedValue > 0) {
            output.unshift(carriedValue);
        }
    }   
    return output;
}
//console.log(plusOneExtra([1,2]))


var plusOne = function (digits) {
    let result = [];

    for(let i = digits.length-1; i >= 0; i--) {
        const sum = digits[i] + 1;

        if (sum >= 10) {
            result.unshift(sum %10);
        } else {
            result.unshift(sum);
        } 

        if(i === 0 && digits[i] >= 10) {
            result.unshift(1)
        }
    }

    return result;
}

var backspaceCompare = function(S, T) {
    let res_S = removeChar(S);
    let res_T = removeChar(T);
    if(res_S.length !== res_T.length) {
        return false;
    }
    for (let i = 0; i <= S.length -1; i++) {
        if(res_S[i] !== res_T[i]) {
            return false;
        }
    }
    return true;
    
};
// helper function for backspaceCompare();
var removeChar = function(stri) {
    arr = []
    for(let i = 0; i <= stri.length -1; i++) {
        if (stri[i] === '#') {
            arr.pop();
        } else {
            arr.push(stri[i]);
        }
    }
    return arr
}


var maxSubArray = function (nums) {
    let max = -Infinity;
    let currentMax = 0;
    for(let i = 0; i<= nums.length -1; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        max = Math.max(currentMax, max)
    }
    return max;
}


var isValidParnthesis = function (s) {
    if(s === '') {
        return true;
    }
    let stack = [];
    const pair = new Map();
    pair.set(')', '(');
    pair.set('}', '{');
    pair.set(']','[');

    for(let i = 0; i<= s.length-1; i++) {
        if (pair.get(s[i])) {
            if(stack.length === 0) {
                console.log(i)
                return false;
            }
            if(stack[stack.length-1] === pair.get(s[i])) {
                stack.pop();
            } else {
                console.log(stack)
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }
    console.log(`here`)
    console.log(stack)
    return stack.length === 0;


    
}

// console.log(isValidParnthesis("()())()"))

var removeInvalidParentheses = function(s) {
    if(s === '') {
        return true;
    }
    s=s.split('');
    let stack = [];
    removeIndex = [];
    const pair = new Map();
    pair.set(')', '(');
    pair.set('}', '{');
    pair.set(']','[');

    for(let i = 0; i<= s.length-1; i++) {
        if (pair.get(s[i])) {
            if(stack.length === 0) {
                s.splice(i, 1);
                continue;
            }
            if(stack[stack.length-1] === pair.get(s[i])) {
                stack.pop();
            } else {
                s.splice(i, 1);
            }
        } else {
            stack.push(s[i]);
        }
    }
    
    console.log(s)
};

//console.log(removeInvalidParentheses("()())())"))


var isHappy = function(n) {
    let sum;
    let isSeen = {};
    isSeen[n] = true;

    while(true) {
        n = n.toString()
             .split('')
             .map(function(digit) {return parseInt(digit, 10)})
             .reduce(function(total, digit) { return total + digit*digit}, 0);
             
        if(n === 1) {
            return true;
        } else if (isSeen) {
            return true;
        } else {
            isSeen[n] = true;
        }
    }
}

//console.log(isHappy());

var missingNumber = function(nums) {
    let _set = new Set();
    for (let i = 0; i <= nums.length-1; i++) {
        _set.add(nums[i])
    }

    for (let i = 0; i <= nums.length; i++) {
        if(_set.has(i) === false) {
            return i;
        }
    }
};

//console.log(missingNumber([0,3,1]))



var productExceptSelf = function(nums) {
    let product = 1;
    let result = []
    for(let i = 0; i <= nums.length-1; i++) {
        product *= nums[i]
    }
    console.log(product)
    for(let i = 0; i <= nums.length-1; i++) {
        if(nums[i] === 0) {
            result.push(0)
        } else {
            result.push(product/nums[i])
        }
    }

    return result;
};

// console.log(productExceptSelf([1,0,5,0]))


var maximumProduct = function(nums) {
    nums = nums.sort((a,b) => a-b)
    return Math.max(nums[0]*nums[1]*nums[nums.length-1], nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3]);
};

console.log(maximumProduct([1,2,3,4]))