var removeDuplicateLetters = function(s) {
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
};

console.log(removeDuplicateLetters("bcabc"));