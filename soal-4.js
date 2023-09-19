const commonChar = (text) => {
    const temp = {}
    for (const char of text) {
        temp[char] = (temp[char] || 0) + 1;
    }
    
    let most = "";
    let maxCount = 0;
    
    for (const common in temp) {
        if (temp[common] > maxCount) {
            most = common;
            maxCount = temp[common];
        }
    }

    return most;
}

module.exports = commonChar;
