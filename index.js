// nomor 5
const {sort, sorted} = require("./soal-5")
let alphabet = "qwertyuiopasdfghjklzxcvbnm"
console.log(sorted(alphabet));

// nomor 6
const getMinimumDate = require("./soal-6")

const dates = [
    new Date("2023-09-15"),
    new Date("2023-09-10"),
    new Date("2023-09-20"),
    new Date("2023-09-05")
];

const minimumDate = getMinimumDate(dates);
console.log("Minimum Date:", minimumDate);

// nomor 7
const twoDimArray = require("./soal-7")

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const totalSum = twoDimArray(matrix);
console.log("Sum of all elements:", totalSum);

// nomor 8
const CommonPrefix = require("./soal-8")
const arrayOfStrings = ["flower", "flour", "flourish"];
const longCommonPrefix = CommonPrefix(arrayOfStrings);
console.log(longCommonPrefix); 
