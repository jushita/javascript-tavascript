function decode(key, code) {
    // create an array from the given key string
    key = key.split('');
    // create variable to store the result;
    let decodedWord = '';
    //loop over the code and append the result to decodedWord
    for (let i = 0; i < code.length; i++) {
        decodedWord += ((key[code[i]]))
        // key[code[0]] --> w
        // key[code[1]] --> o
        // key[code[2]] --> h ....
    }
    return decodedWord;
}

decode("hello world", "6405372");