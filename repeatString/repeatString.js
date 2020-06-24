const repeatString = function(string, iteration) {
    if (iteration < 0) return 'ERROR';

    let result = '';

    for (let i = 0; i < iteration; i++) {
        result += string;
    }

    return result;
}

module.exports = repeatString
