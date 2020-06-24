const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 ||
        (typeof num1) != "number" || (typeof num2) != "number") {
        return 'ERROR';
    }

    let min;
    let max;

    if (num1 < num2) {
        min = num1;
        max = num2;
    } else {
        min = num2;
        max = num1;
    }

    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}

module.exports = sumAll
