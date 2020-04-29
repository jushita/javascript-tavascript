var longestPallindromeSubstring = function(s) {
    let start = 0; let end = 0;
    for(i = 0; i < s.length; i++) {
        let len1 = expandAroundTheCenter(s, i, i);
        let len2 = expandAroundTheCenter(s, i, i+1);
        let len = Math.max(len1, len2);

        if(len > end-start) {
            start = Math.round(i-(len-1)/2)
            end = Math.floor(i+len/2);
        }
    }

    return s.substring(start, end+1);
}


var expandAroundTheCenter = function(s, left, right) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    console.log(right, left, right-left-1);
    return right - left - 1;
}

console.log(longestPallindromeSubstring('abbab'))