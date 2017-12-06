# Javascript Interview Problems

## program.js
This file contain problems that help to understand the language's syntax better

### Problems:
1. Check if a string is anargram or not
2. Reverse a string
3. Check if a string is pallindrom or not (with in-built function)
4. Check if a string is pallindrom or not (without in-bult function)
5. Count occurance of characters in a string
6. Remove a particular character from a string
7. How do you find second highest number in an integer array?
8. Given two arrays, 1,2,3,4,5 and 2,3,1,0,5 find which number is not present in the second array.
9. Find index of a given number
10. How to remove duplicate elements from array?
11. Find the number of words from a camel cased string.
```
Example:
Input: myNameIs
Output: 3
```
12. Given two strings delete all characters to make it anagrams
13. Practice indexOf:
```
anyString = 'Brave new world'

```
* The index of the first o from the beginning
* The index of the last w from the beginning
* The index of "new" from the beginning
* The index of "new" from the end

14. Find all the pairs whose sum equals to a target
```
Input: [1,2,3,4,5]
Output: 1 4, 2 3
```
15. How to find first non repeated character of a given String
16. In an array 1-100 numbers are stored, one number is missing how do you find it
17. Find if a number is Armstrong's number or not
18. Find the Armstrong's number in a given list
19. the sky is blue --> blue is sky
20. Given two strings delete all characters to make it anagrams.


## leetcode.js

This file contains solution to problems from Leetcode. (https://leetcode.com/problemset/top-interview-questions/)

### Problems:
1. Given an array of integers, every element appears twice except for one. Find that single one.
```
Input: [1,1,2,2,3,3,4]
Output: 4
```
2. Given an array of integers, every element appears twice except for one. Find that single one without using extra memory.
3. Write a program that outputs the string representation of numbers from 1 to n.
But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

```
Example:
n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",s
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
```
4. Write a function that takes a string as input and returns the string reversed.
```
Example:
Given s = "hello", return "olleh".
```
5. Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
6. Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
```
Example:
input: nums = [0,1,0,3,12]
output: [1, 3, 12, 0, 0]
```
7. 7. Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements. Not in place.
8. Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
9. Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
10. Given two strings s and t, write a function to determine if t is an anagram of s. Given two strings s and t, write a function to determine if t is an anagram of s.
```
For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.
```
11.
12. Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
```
Example 1:
Input: [3,0,1]
Output: 2

Example 2:
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
```
13. Write an algorithm to determine if a number is "happy".
A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
```
Example: 19 is a happy number

1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
```
14. You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
15. Given an integer, write a function to determine if it is a power of three.
16. 16. Write a function that takes an unsigned integer and returns the number of ’1' bits it has
```
For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.
```
17. Count the number of prime numbers less than a non-negative number, n.
18. Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
```
For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.
```
19. Given a 32-bit signed integer, reverse digits of an integer.
```
Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
```
20. Given a string, your task is to count how many palindromic substrings in this string.
```
Example 1:
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```
21. Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
```
For example,
given [1,2,3,4], return [24,12,8,6].
```
