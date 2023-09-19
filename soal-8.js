function CommonPrefix(strs) {
    if (strs.length === 0) return ""; 
    
    strs.sort();
    
    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];
    let result = "";
    
    for (let i = 0; i < firstStr.length; i++) {
        if (firstStr.charAt(i) === lastStr.charAt(i)) {
            result += firstStr.charAt(i);
        } else {
            break;
        }
    }
    
    return result;
}

module.exports = CommonPrefix