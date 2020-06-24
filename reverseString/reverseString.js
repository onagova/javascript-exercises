const reverseString = function(string) {
    let stringArray = string.split('');
    stringArray.reverse();

    return stringArray.join('');
}

module.exports = reverseString
