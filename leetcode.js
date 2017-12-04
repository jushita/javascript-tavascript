//1. Given an array of integers, every element appears twice except for one. Find that single one.
 // [1,1,2,2,3,3,4]
 function singleNumber(nums){
     nums = nums.sort(function(a,b){return(a-b)})
     len = nums.length;
     dict = {};
     if (len%2 != 0){
        for(let i = 0; i <= len - 1;i++){
            if(dict[nums[i]] == undefined) {
                dict[nums[i]] = 1;
            } else {
                dict[nums[i]]++;
            }
        }
     }
     else{
         console.log("No single number");
     }
     for (let key in dict){
         if (dict[key] == 1){
             console.log(`${dict[key]} is the single number`);
         }
     }

 }


//singleNumber([9,8,6,6,8,9])
//2. Given an array of integers, every element appears twice except for one. Find that single one. Without using extra memory.

function singleNumber_2(nums){

    var num = 0;
    for(let i=0; i<nums.length; i++){
        num ^= nums[i];
    }

    console.log (num);

}

//singleNumber_2([9,8,6,3,6,8,9])


//3. Write a program that outputs the string representation of numbers from 1 to n.

//But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”

function fizzBuzz(n){
    var result = [];
    for(let i = 1; i <= n; i++){
        if(i%15==0){
            result.push("FizzBuzz");
        }
        else if (i%3==0) {
            result.push("Fizz");
        }
        else if (i%5==0) {
            result.push("Buzz");
        }
        else{
            result.push(i);
        }
    }
    console.log(result);
}
//fizzBuzz(30)


//4. Reverse a string

function Reverse(str){
    var arr_str = Array.from(str);
    var res = [];
    for(let i = arr_str.length-1; i >= 0; i--){
        res.push(arr_str[i]);
    }
    res = res.join("");
    return res;
}
//console.log(Reverse("hello"));


//5. Maximum Depth of Binary tree

function maxDepth(root){
    if(root === null){
        return 0;
    }
    return(1+Math.max(maxDepth(root.left), maxDepth(root.right)));
}


//6. Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
function moveZeros(nums){
    var count = 0;
    n = nums.length
    for(let i = 0; i <= n-1; i++){
        if(nums[i] != 0){
            nums[count++] = nums[i];

        }
    }
    while (count < n){
        nums[count++] = 0
    }
    console.log(nums);
}

//moveZeros([0,1,0,2,13]);


//7. Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//not in place
function moveZeros_2(nums){
    var res = []
    for(let i = 0; i <= nums.length - 1; i++){
        if (nums[i] != 0){
            res.push(nums[i])
        }
    }
    for (let i = 0; i<=nums.length - 1; i++){
        if (nums[i] == 0){
            res.push(nums[i])
        }
    }

    console.log(res)
}
//moveZeros_2([0,1,0,2,13]);

//8. Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

function majorityElement(nums){
    var n = nums.length;
    var dict = {};
    for(let i = 0; i<= n-1; i++){
        if (dict[nums[i]] == undefined){
            dict[nums[i]] = 1;
        }
        else{
            dict[nums[i]] ++;
        }
    }
    for(let key in dict){
        if (dict[key] >= Math.floor(n/2)){
            console.log(`The Majority Number is ${key}`);
            break;
        }
    }
}
//majorityElement([1,1,1,1,1,1,2,3,4,4,4,4,3,3,1,1,])
//9. Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

function firstUniqChar(string){
    var string_arr = Array.from(string);
    var dict = {};
    for(let i = 0; i <= string.length - 1; i++){
        if(dict[string[i]] == undefined){
            dict[string[i]] = 1;
        }
        else{
            dict[string[i]] ++;
        }
    }
    for(let key in dict){
        if (dict[key] == 1){
            return (`The index of the first non-repeating character is: ${string.indexOf(key)}`);
            break;
        }

    }
    return (-1)
}
//console.log(firstUniqChar("loveleetcode"));

// 10. Given two strings s and t, write a function to determine if t is an anagram of s.

function isAnargram(s, t){
    s = Array.from(s)
    t = Array.from(t)
    s = s.sort().join("");
    t = t.sort().join("");
    if (s == t){
        return(true);
    }
    else{
        return(false);
    }
}
//console.log(isAnargram("abcd", "abcd"));
