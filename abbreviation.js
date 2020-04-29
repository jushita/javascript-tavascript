function abbreviate(word) {
    if(word.length <=3) {
        return word;
    }
    let middleNumber = word.length-2;
    return word[0] + middleNumber.toString() + word[word.length-1];
}

class Abbreviate {
    constructor() {
        this.seen = new Set();
        for(let word of library) {
            this.seen.add(abbreviate(word));
        }
    }


    getAbbreviation(word) {
        let abbWord = abbreviate(word);
        if(this.seen.has(abbWord)) {
            return word;
        } else {
            this.seen.add(abbWord);
            return abbWord;
        }
    }
}



const abbr = new Abbreviate(['a', 'b', 'c']);

console.log(abbr.getAbbreviation('w'));

module.exports = abbr;

