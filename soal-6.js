function getMinimumDate(dateArray) {
    if (dateArray.length === 0) {
        return null; // Return null for an empty array
    }

    let minDate = dateArray[0]; // Initialize minDate with the first date

    for (let i = 1; i < dateArray.length; i++) {
        if (dateArray[i] < minDate) {
            minDate = dateArray[i];
        }
    }

    return minDate;
}

// Example array of dates

module.exports = getMinimumDate;
