
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

    var fiboSeries = [0,1];
    for(let i = 0 ; i<=n-3; i++){
        next = fiboSeries[i] +fiboSeries[i+1];
        fiboSeries.push(next)
    }
    console.log(fiboSeries);
}
//fibo(6)
function fibonacci(num) {
  var memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
console.log(fibonacci(7))

function ltwo(nums){
    var res = 0;
    for(let i = 0; i<=nums.length; i++){
        res ^= nums[i]
    }
    console.log(res)
}
//ltwo([9,8,6,3,6,8,9]);

function lsix(nums){
    var count = 0;
    for(let i=0; i<= nums.length-1; i++){
        if(nums[0] != 0){
            nums[count++] = nums[i];
        }
    }
    while(count < n){
        nums[count++] = 0;
    }
    console.log(nums)
}

function leight(nums){
    var n = nums.length
    var dict = {};
    for(let i = 0; i <= n-1; i++){
        if(dict[nums[i]] == undefined){
            dict[nums[i]] = 1;
        }
        else{
            dict[nums[i]]++;
        }
    }
    for(let key in dict){
        if (dict[key] >= Math.floor(n/2)){
            console.log(key);
            break;
        }
    }
}

function lthirteen(s){
    if (s == 1){
        return ("Happy number found");
    }
    var nums = 0;
    var arr_n = Array.from(s.toString());
    for (let i = 0; i <=arr_n.length-1; i++){
        nums += Math.pow(parseInt(arr_n[i]), 2)
    }
    return lthirteen(nums);
}
console.log(lthirteen(19));

function fibo(n){
    if(n<=1){
        return n;
    }
    return (fibo(n-1)+(n-2));
}

function fiboSeries(s){
    var result = [];
    for(let i = 0; i <= s.length - 1; i++){
        result.push(fibo(i));
    }
    console.log(`Here is the fibo series ${result}`);
}
fiboSeries(3)
