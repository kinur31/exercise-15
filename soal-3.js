const lcm = (num1, num2) => {
    let tempNum1 = num1;
    let tempNum2 = num2;

    do {
        num1 > num2 ? num2+=tempNum2 : num1+=tempNum1;
    } while (num1 !== num2) {
        return num1;
    }
}

module.exports = lcm;