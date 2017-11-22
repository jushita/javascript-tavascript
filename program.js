function isAnargram(str1, str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    str1 = str1.split("").sort();
    str2 = str2.split("").sort();

    if (str1.join("") === str1.join("")){
        console.log("TRUE");
    }

}
//isAnargram("DADa","dad");
function Reverse(str){
    var arr_str = Array.from(str);
    var res = [];
    for(let i = arr_str.length-1; i >= 0; i--){
        res.push(arr_str[i]);
    }
    res = res.join("");
    return res;
}
Reverse("abcd");


function isPallindrom(str)
{
    if (Reverse(str) == str){
        return("pallindrom");
    }
    else{
        return("not")
    }
}

function isPalindrome(str) {
    var count = 0;

    if(str.length%2 != 0) {
        for(let i = str.length-1; i > Math.floor(str.length/2); i--) {
            if(str[count] != str[i]) {
                return false
            }
            count++;
        }
    } else {
        for(let i = str.length-1; i >= Math.ceil(str.length/2); i--) {
            if(str[count] != str[i]) {
                return false
            }
            count++;
        }
    }
    return true;
}

console.log(isPallindrom("mom"));
console.log(isPalindrome("m"));



function countOccurance(str){
    var dict = {};

    for(let i = 0; i<str.length; i++){
        if(dict[str[i]] == undefined) {
            dict[str[i]] = 1;
        } else {
            dict[str[i]]++;
        }
    }
    console.log(dict);
}
countOccurance("aabbcccd")

//Write a method which will remove any given character from a String?

function removeChar(str, s){
    var arr_str = Array.from(str);
    for(let i = 0; i <= 0; i++){
        if (arr_str[i] === s){
            arr_str[i]= "";
            break;
        }
    }
    console.log(arr_str.join(""));
}

removeChar("abcda","a")

console.log("aaaam".replace(/a/gi, ""));

//How do you find second highest number in an integer array?
//var myFunc = function (){}
// var myfunc = () =>
function secondHighest(arr){
    arr = arr.sort(function(a,b){ return a-b });
    console.log(arr);
}
secondHighest([5,6,7,8,1,23,4]);

ar = ["a","b","A","z","Z"];
console.log(ar.sort(function(a,b){ return a-b }))

//Given two arrays, 1,2,3,4,5 and 2,3,1,0,5 find which number is not present in the second array.
function missing(a,b){
    for(let i = 0; i < b.length; i++) {
        if(a.indexOf(b[i]) == -1) {
            console.log(`${b[i]} is missing!`);
            break;
        }
    }
}


missing([1,2,3,4,5], [2,3,1,0,5]);

function missing2(a,b){
    for(let i = 0; i<= a.length-1;i++){
        if (a.indexOf(b[i]) == -1){
            console.log(`${b[i]} is missing!`);
        }
        }


}

missing2([1,2,3,4,5], [2,3,1,0,5]);






//Find index of a given number

function idx(arr, target){
    var res = "False";
    for(let i = 0; i <= arr.length-1; i++){
        //console.log(`i is ${i} and arr[i] is ${arr[i]}`);
        if (arr[i] == target){
            console.log(`target index is at ${i}`);
            res = "True";
        }

    }
    if (res=="False"){
        console.log("Absent");
    }
}
idx([11,22,33,44,55,55,55], 55)

// How do you find second highest number in an integer array?

function secHigh(arr){
    arr.sort(function(a,b){ return(b-a) });
    console.log(arr[1])
}
secHigh([4,5,6,22,21,0,2])

//count occurance of character

function counts(arr){
    var dict = {};
    for(i = 0; i<=arr.length-1;i++){
        if (dict[arr[i]] == undefined){
            dict[arr[i]] = 1;
        }
        else {
            dict[arr[i]]++;
        }
    }
    console.log(dict);
}
counts("aabbbcccd")

// How to remove duplicate elements from array
function removeDupli(str){
    var dict = {};
    var res = [];
    for (let i = 0; i<=str.length-1;i++){
        dict[str[i]] = 0;
    }
    for(key in dict){
        res.push(key);
    }
    console.log(res.join(""))
}


removeDupli("aabbccd")


function findCameelCaseWords(str){
    var count = 0
    for(let i = 0; i <= str.length-1; i++){
        if(str[i] == str[i].toUpperCase()){
            count++;
        }

    }
    console.log(`Number of words are ${count+1}`)
}

findCameelCaseWords("myNameIs")

//How to find all pairs in array of integers whose sum is equal to given number?
//Find duplicate in an array; Input:  [2,3,3,4,5,2]
//Output: 3
//Explanation: Because the second index of 3 is less than the second index of 2.

//find substrings of a String
//find longest pallindrom in a string


// Given two strings delete all characters to make it anagrams

function delChars(str1, str2){
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    console.log(str1, str2);


}

//delChars("cinema", "icemanzds");

//reverse a strings
function reverse(str){
    var res = [];
    str = Array.from(str);
    for(let i = str.length-1; i>=0; i--){
        res.push(str[i]);
    }
    console.log(res.join(""));
}

reverse("abcd");

//copy arrays

function copy(ar){
    var res = [];
    for(let i = 0; i<=ar.length-1; i++){
        res.push(ar[i]);
    }
    for(let i = 0; i<=ar.length-1; i++){
        res.push(ar[i]);
    }

    console.log(res)
}

copy([1,2,3,4]);

var anyString = 'Brave new world';

console.log('The index of the first w from the beginning is ' + anyString.indexOf('o'));
// logs 11
console.log('The index of the last w from the beginning is ' + anyString.lastIndexOf('w'));
// logs 10

console.log('The index of "new" from the beginning is ' + anyString.indexOf('new'));
// logs 6
console.log('The index of "new" from the end is ' + anyString.lastIndexOf('new'));
// logs 6
console.log(['Blue','Whale'].indexOf('Whale'));

function sum(a, target){
    for(let i = 0; i<= a.length-1;i++){
        for(let j = i+1; j<=a.length-1;j++){
            if (a[i]+a[j] == target){
                console.log(a[i], a[j]);
            }
        }
    }

}

sum([1,2,3,4],5);
