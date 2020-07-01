const fibonacci = function(n) {
    // const fib = [1, 1];

    // for (let i = 2; i < n; i++) {
    //     fib.push(fib[i - 1] + fib[i - 2]);
    // }

    // return fib[n - 1];

    if (n < 0) return 'OOPS';

    return (n < 3) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = fibonacci
