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
console.log(Reverse("hello"));
