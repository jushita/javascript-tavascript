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
findWords('bedbath', ['bed','bath','and','beyond']);


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

primeNums(9);
