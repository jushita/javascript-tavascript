
/*
"abedbth"
'bed','bath','and','beyond']
*/
function findWords(string, array){
    //find if word in array exists in the strings
    for(let i = 0; i <= array.length - 1; i++){
        if(string.indexOf(array[i]) != -1){
            //print out individual words
            console.log(array[i]);
        }
    }
}
//findWords('bedbath', ['bed','bath','and','beyond']);


//Write a program to find all prime number up to a given numbers?

function isPrime(num){
    if (num >= 1 && num <= 2){
        return true;
    }
    for(let i = 2; i <= num - 1; i++){
        if(num%i == 0){
            return false;
        }
    return true;
    }
}

function primeNums(k){
    for(let i = 0; i<= k - 1; i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}

//primeNums(9);

//How to swap two numbers without using temp variable?

function swapTwoNums(a, b){
    a = a+b;
    b= a-b;
    a = a-b;
    console.log(a,b);
}
//swapTwoNums(3,4)


//Check if num is binary or Not

function binNum(num){
    console.log(num.toString())
    var flag = false;
    var arr_num = Array.from(num.toString());
    console.log(arr_num)
    for(let i = 0; i<= arr_num.length - 1; i++){
        if(arr_num[i] == 0 || arr_num[i] == 1){
            flag = true;
        }
        else{
            flag = false;
        }
    }
    console.log(flag);
}

//binNum('00000000000000000000000000001011');

//Write function to compute Nth Fibonacci number? Both iterative and recursive?

function fibo(n){
    var fibo1 = 0;
    var fibo2 = 1;
    var fiboSeries = [0,1];
    for(let i = 0 ; i<=n-3; i++){
        next = fiboSeries[i] +fiboSeries[i+1];
        fiboSeries.push(next)
    }
    console.log(fiboSeries);
}
//fibo(6)


function ltwo(nums){
    var res = 0;
    for(let i = 0; i<=nums.length; i++){
        res ^= nums[i]
    }
    console.log(res)
}
ltwo([9,8,6,3,6,8,9]);

function lsix(nums){
    var count = 0;
    for(let i=0; i<= nums.length-1; i++){
        if(nums[0] != 0){
            nums[count++] = nums[i];
        }

}