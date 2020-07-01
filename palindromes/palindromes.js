const palindromes = function(string) {
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,'');
    string = string.toLowerCase();

    const halfLength = Math.floor(string.length / 2);

    for (let i = 0; i < halfLength; i++) {
        if (string[i] != string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

module.exports = palindromes
