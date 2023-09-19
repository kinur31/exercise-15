const getDay = (date) => {
    let getDay = new Date(date).getDay();
    console.log(getDay);
    if (getDay === 0 || getDay === 1) {
        return `${date} merupakan Weekend`;
    } else {
        return `${date} bukan Weekend`;
    }
}

module.exports = getDay;