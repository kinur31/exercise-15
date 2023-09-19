function getMinimumDate(dateArray) {
    if (dateArray.length === 0) {
        return null; 
    }

    let minDate = dateArray[0]; 

    for (let i = 1; i < dateArray.length; i++) {
        if (dateArray[i] < minDate) {
            minDate = dateArray[i];
        }
    }

    return minDate;
}

module.exports = getMinimumDate
