function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce((total, item) => total + item, 0);
}

function multiply (array) {
	return array.reduce((total, item) => total * item, 1);
}

function power(a, b) {
	return a ** b;	
}

function factorial(n) {
	let result = 1;

	for (let i = 2; i <= n; i++) {
		result *= i;
	}

	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}