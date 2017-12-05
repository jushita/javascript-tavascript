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

//11. Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

function containsDuplicate(nums){
    dict = {};
    result = true;
    for(let i = 0; i <= nums.length - 1; i++){
        if (dict[nums[i]] == undefined){
            dict[nums[i]] = 1;
        }
        else{
            dict[nums[i]]++;
        }
    }
    for(let key in dict){
        if(dict[key] != 1){
            result = false;
        }
    }
    return (result);
}
//console.log(containsDuplicate([1,1,2,3,4,5]));

function intersect (nums1, nums2){

}


//12. Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

function missingNumber(nums){
    var n = nums.length;
    nums  = nums.sort(function(a,b){return(b-a)});
    var highest = nums[0];
    var total_sum = 0;
    var sum = 0;
    for (let i = 0; i<=highest; i++){
        total_sum += i;
    }
    for (let i = 0; i<= nums.length-1; i++){
        sum = sum + nums[i];
    }
    var result = total_sum-sum;
    console.log(`Missing number is ${result}`);
}

//missingNumber([9,6,4,2,3,5,7,0,1]);

//13. Write an algorithm to determine if a number is "happy". A happy number is a number defined by the following process:
//Starting with any positive integer, replace the number by the sum of the squares of its digits,
//and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
//Those numbers for which this process ends in 1 are happy numbers. 19

function isHappy(n){
    if(n == 1) {
        return console.log('Happy number found!');
    }
    var sum = 0;
    var arr_n = Array.from(n.toString());
    for(let i = 0; i <= arr_n.length - 1; i++){
        sum += Math.pow(arr_n[i], 2);
    }
    isHappy(sum);

}

//isHappy(82)
/*
14. You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.
*/
var fib = function(n) {
    if(n<=1) {
        return n;
    }
    return fib(n-1) + fib(n-2)
}

var climbStairs = function(n) {
    return fib(n + 1)
};

//console.log(climbStairs(11));

//15.  Given an integer, write a function to determine if it is a power of three.

function isPowerOfThree(n){
    if (n == 1){
        return (console.log("Power of 3"));
    }
    if (n%3 != 0){
        return (console.log("Not a power of 3"));
    }

    n = n/3;
    isPowerOfThree(n)
}

//isPowerOfThree(27)

//16. Write a function that takes an unsigned integer and returns the number of ’1' bits it has

function hammingWeight(n){
    var res = 0;
    for(let i = n; i !== 0; ){
        if(i%2 === 1){
            res++;
        }
        i = parseInt(i/2);
    }
    return (res);
}
//console.log(hammingWeight(3))

//17. Count the number of prime numbers less than a non-negative number, n.

function primes(n){
    if (n < 2){
        return(false);
    }
    for(let i = 2; i < n; i++){
        if(n%i == 0){
            return(false);
        }
    }
    return(true);
}

function countPrimes(n){
    var count = 0;
    for(let i = 0; i <= n - 1; i++){
        if(primes(i) == true){
            count++;
        }
    }
    console.log(count);
}
//countPrimes(20)

// 18. Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

function isPallindrom(str){
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); //removes all punctuations
    str = str.replace(/\s+/g, ""); //removes all white spaces
    str = str.toLowerCase();
    var reverse_str = [];
    arr_str = Array.from(str);
    for(let i = arr_str.length - 1; i >= 0; i--){
        reverse_str.push(arr_str[i]);
    }
    if(arr_str.join('') === reverse_str.join('')){
        return(console.log("Yes Pallindrom"));
    }
    else{
        return(console.log("Not a Pallindrom"));
    }

}


//isPallindrom("A man, a plan, a canal: Panama");

// 19. Given a 32-bit signed integer, reverse digits of an integer.
function removeZeros(num){
    arr_num = Array.from(num.toString());
    if (arr_num[arr_num.length - 1] != '0'){
        return num;
    }

    arr_num.pop();
    new_num = parseInt(arr_num.join(''));
    return removeZeros(new_num);
}
//console.log(removeZeros(12300));


function _reverse(num){
    if (isNaN(num)){
        return console.log("ERROR");
    }

    nums = removeZeros(num);
    var arr_num = Array.from(nums.toString());
    var rev_num = [];

    for(let i = arr_num.length - 1; i >= 0; i--){
        rev_num.push(arr_num[i]);
    }
    if(rev_num[arr_num.length - 1] == '-'){
        rev_num.pop();
        rev_num.unshift('-')
    }
    console.log(rev_num.join(''));

}

//_reverse(-12300)


//20. Given a string, your task is to count how many palindromic substrings in this string.
function Pallindrom(str){
    var arr_str = Array.from(str);
    var rev_str = [];
    for(let i = arr_str.length - 1; i>= 0; i--){
        rev_str.push(arr_str[i]);
    }
    if (rev_str.join('') == str){
        return true;
    }
}
Pallindrom("cat");

function countSubstrings(s){
    var result = [];
    var count = 0;
    for (let i = 0; i <= s.length - 1; i++){
        for (let j = i + 1; j <= s.length; j++){
            result.push(s.slice(i,j));
        }
    }

    console.log(result)
    for(let i = 0; i <= result.length - 1; i++){
        if (Pallindrom(result[i])) {
            count++;
        }
    }
    return (console.log(count));
}

countSubstrings("aaa");
