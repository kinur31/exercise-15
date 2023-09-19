const commonChar = (text) => {
    const temp = {}
    for (const char of text) {
        temp[char] = (temp[char] || 0) + 1;
    }
    
    let most = "";
    let maxCount = 0;
    
    for (const common in char) {
        if (temp[char] > maxCount) {
            most = char;
            maxCount = temp[char];
        }
    }

    return most;
}

module.exports = commonChar;
