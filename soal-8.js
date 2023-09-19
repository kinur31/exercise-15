function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; // Handle empty input
    
    // Sort the array to make it easier to find common prefix
    strs.sort();
    
    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];
    let result = "";
    
    for (let i = 0; i < firstStr.length; i++) {
        if (firstStr.charAt(i) === lastStr.charAt(i)) {
            result += firstStr.charAt(i);
        } else {
            break; // Stop when characters don't match
        }
    }
    
    return result;
}

module.exports = longestCommonPrefix;
