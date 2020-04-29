function specialKeyboard(keyboard, word) {
    if(word === "") {
        return 0;
    } 
    let moves = keyboard.indexOf(word[0]); 
    let keyboardMap = new Map();
    for(let i = 0; i<keyboard.length; i++) {
        keyboardMap.set(keyboard[i], i)
    } 
    for (let i = 0; i<word.length-1; i++) {
        moves += Math.abs(keyboardMap.get(word[i]) - keyboardMap.get(word[i+1]));
    } 
    return moves;
}


