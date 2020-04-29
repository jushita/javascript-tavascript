function abbreviate(word) {
    if(word.length <= 3) {
        return word;
    }
    let middleNumber = word.length - 2;
    return word[0] + middleNumber.toString() + word[word.length-1];
}

class Abrreviator {
    constructor(library) {
        this.seen = new Set();
        for (let word of library) {
            this.seen.add(abbreviate(word));
        }
    }

    getAbbreviation(word) {
        let abbWord = abbreviate(word); // w4t
        if(this.seen.has(abbWord)) {
            return word;
        } else {
            this.seen.add(abbWord);
            return abbWord;
        }
    }
}

const abbr = new Abrreviator(['wallet', 'dog', 'hello', 'internationalization'])

module.exports = abbr;

console.log(abbr.getAbbreviation('wicket'))
console.log(abbr.getAbbreviation('wallet' ))
console.log(abbr.getAbbreviation('mishti'))