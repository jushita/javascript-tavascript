function alienDict(words, order) {
    let orderSeq = {};
    let reqOrder = [];
    let prevWord;

    for(let i  = 0; i < order.length; i++) {
        orderSeq[order[i]] = i;
    }

    for(let i = 0; i< words.length; i++) {
        let j = 0;
        let currentWord = words[i]
        if(orderSeq[currentWord[j]] < orderSeq[prevWord[j]] ) {
            return false;
        } 
        if(orderSeq[words[i][j]] === orderSeq[prevWord[j]]) {
            let smallWord;
            if(words[i].length < prevWord.length) {
                smallWord = words[i];
            } else {
                smallWord = prevWord
            }
            j++;
        }
    }

    return true;

}



// {b: 0, d: 1, a: 2, f: 3, p: 4}

// apple, ab, dad, friend 
//[2,1,3,2] [1,2,2,3]

//[dad, friend, about, apple]