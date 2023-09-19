const getDay = (date) => {
    let getDay = tanggal.getDay();
    console.log(getDay);
    if (getDay === 0 || getDay === 1) {
        return `${date} merupakan Weekend`;
    } else {
        return `${date} bukan Weekend`;
    }
}

const tanggal = new Date("2023-09-10");
console.log(getDay(tanggal));

module.export = getDay;