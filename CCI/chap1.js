// Implement an algorithm to determine if a string has all unique characters What if you can not use additional data structures?

function UniqueChars(s) {
    if(s === '') {
        return "Empty string found"
    }
    let curr = 0, next= curr+1;
    s= s.split('').sort(); // Nlog(N); O(N)
    for(let i = 0; i < s.length -1; i++) {
        if(s[curr] === s[next]) {
            return false;
        } else {
            curr++;
            next++;
        }
    }
    return true;
}

//console.log(UniqueChars('bbb'));

// O(Nlog(N)) space: O(N)

//Write code to reverse a C-Style String (C-String means that “abcd” is represented as five characters, including the null character )


function reverseString(s) {
    s=s.split(''); // I am making an extra array here so space is O(N)
    let first = 0;
    let last = s.length -1;
    let temp= '';

    while (first<last) {
        temp =s[first];
        s[first] = s[last];
        s[last] = temp;
        first = first + 1;
        last = last - 1;
    }        

    return s;
}
//console.log(reverseString('abcde'))

// O(N) //O(N)

//Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer

function removeDupilicate(s) {
    let res=[];
    s=s.split('').sort(); //O(Nlog(N))
    set = new Set();
    s.forEach(element => {
        set.add(element)
    });
    for (v of set) {
        res.push(v)
    }

    return res;
}

//console.log(removeDupilicate('abcsb'))


// Write a method to decide if two strings are anagrams or not

function anargram(s, t) {
    if (s.length !== t.length) return false;
    const map = {};
    
    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    }

    // if the element doesn't exist the f(0) returns false;
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]]) {
            map[t[i]]--;
        }
        else return false;    
    }

    return true;
}

//console.log(anargram('aba', 'baaa'))

// O(N) O(N)


// 15 Write a method to replace all spaces in a string with ‘%20’

function replaceSpaces(stri) {
    stri = stri.replace(/\s/gm, '%20')
    return stri;
}

console.log(replaceSpaces("Space is    space"));



//Assume you have a method isSubstring which checks if one word is a substring of another 
//Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (i e , “waterbottle” is a rotation of “erbottlewa

