//soal 1

//soal 2

//soal 3

//soal 4

//soal 5
const {sort, sorted} = require("./soal-5")
let alphabet = "qwertyuiopasdfghjklzxcvbnm"
console.log(sorted(alphabet));

let alpha = "qwertyuiopasdfghjklzxcvbnm"
console.log(sort(alpha));

//soal 6

const getMinimumDate = require("./soal-6")

const dates = [
    new Date("2023-09-15"),
    new Date("2023-09-10"),
    new Date("2023-09-20"),
    new Date("2023-09-05")
];

const minimumDate = getMinimumDate(dates);
console.log("Minimum Date:", minimumDate);


//soal 7

const twoDimArray = require("./soal-7")

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const totalSum = twoDimArray(matrix);
console.log("Sum of all elements:", totalSum);

//soal 8

const CommonPrefix = require("./soal-8")
const arrayOfStrings = ["flower", "flour", "flourish"];
const longCommonPrefix = CommonPrefix(arrayOfStrings);
console.log(longCommonPrefix); 
const {copyFirstHalf, dayInMonth, hariBerlalu, calculateAge} = require ("./soal9-12")

//soal 9
const number = [1,2,3,4,5]
const result9 = copyFirstHalf(number)
console.log(result9)

//soal 10
const tahun = 2023;
const bulan = 1;
const result10 = dayInMonth(bulan,tahun)
console.log(result10)

//soal 11
console.log(hariBerlalu())

//soal 12
const tanggalLahir = "2000-1-1"
const result12 = calculateAge(tanggalLahir)
console.log(result12)
const getDay = require("./soal-1");

const tanggal = new Date("2023-09-17");
console.log(getDay(tanggal));
