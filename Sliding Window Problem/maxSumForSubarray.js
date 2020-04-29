function maxSum(arr, k) {
    if(k > arr.length) {
        return "invalid"
    }

    let windowTotal = 0;
    for (let i = 0; i < k; i++) {
        windowTotal += arr[i]; // total of first 2 since i < 2
    }

    let maxSumResult = windowTotal;

    for(let i=k; i<arr.length; i++) {
        windowTotal += arr[i] - arr[i-k];
        maxSumResult = Math.max(windowTotal, maxSumResult)
    }
    return maxSumResult;

}

// console.log(maxSum([1, 2, 3], 2))


function maxSum2(arr, k) {
    if (arr.length < k) {
        return false
    }

    let windowTotal = 0;
    for(let i = 0; i < k; i++) {
        windowTotal += arr[i]
    }

    for(let i = k; i < arr.length; i++) {
        windowTotal += arr[i] - arr[i-k];
        max = Math.max(windowTotal, max);
    }

    return max;
}


function minSum (arr, k) {
    if (k> arr.length) {
        return false;
    }

    let windowTotal = 0;

    for (let i = 0; i < k; i++) {
        windowTotal += arr[i]
    }
    let min = windowTotal;

    for(let i = k; i < arr.length; i++) {
        windowTotal += arr[i] - arr[i-k];
        min = Math.min(windowTotal, min)
    }

    return min;
}



//console.log(minSum([1,2,3], 2))

// maximum substring without repeated character

function lengthOfLargestSubstring(s) {
    let leftWindow = 0;
    let longest = 0;
    let counts = {};

    for(let rightWindow = 0; rightWindow < s.length; ) {
        console.log(`beginning loop`)
        console.log(counts, leftWindow, rightWindow)
        if(!counts[s[rightWindow]]) {
            counts[s[rightWindow]] = 0;
        }
        counts[s[rightWindow]] +=1;
        console.log(`after right`);
        console.log(counts, leftWindow, rightWindow);

        if(Object.values(counts).some((element) => element > 1)) {
            console.log(`inside left`)
            console.log(counts, leftWindow, rightWindow)
            counts[s[leftWindow]] -= 1; //if duplicate found move leftwindow
            leftWindow +=1
            console.log(`after left`)
            console.log(counts, leftWindow, rightWindow)
        }
        console.log(leftWindow, rightWindow)
        // check to see if current substring length is greater than longest
        longest = Math.max(longest, rightWindow - leftWindow +1);
        rightWindow += 1


    }
    return longest;
}


//console.log(lengthOfLargestSubstring("pwwkew"));

var lengthOfLongestSubstringTwoDistinct = function(s) {
    let leftWindow = 0;
    let longest = 0;
    let count = {};
    
    for(let rightWindow = 0; rightWindow < s.length; rightWindow++) {
        if(!count[s[rightWindow]]) {
            count[s[rightWindow]] = 0;
        }
        count[s[rightWindow]] += 1;

        if(Object.keys(count).length > 2) {
            count[s[leftWindow]] -= 1;
            if (count[s[leftWindow]] == 0) {
                delete count[s[leftWindow]];
            }
            leftWindow += 1
        }
    
        console.log(count)
        longest = Math.max(longest, rightWindow - leftWindow + 1)
    }
    return longest;
};

//console.log(lengthOfLongestSubstringTwoDistinct("pwwkew"))



var maxSlidingWindow = function(nums, k) {
    let leftWindow = -1;
    let rightWindow = k-1;
    let result = [];
    let ranges = [];
    

    for(let i = 0; rightWindow < nums.length; i++) {
        leftWindow++;
        rightWindow++;
        ranges.push((range(leftWindow, rightWindow)))

    }
    for(let i = 0; i < ranges.length; i++) {
        result.push(maxNum(arrVal(ranges[i], nums)))
    }

    return result;
};

function maxNum(nums) {
    console.log(nums)
    return Math.max(...nums);
}
function range(start, stop, step =1) {
    return Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step)
}

function arrVal(arr, nums) {
    let res = []
    for (let i = 0; i <arr.length; i++) {
        res.push(nums[arr[i]])
    }
    return res;
}
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))