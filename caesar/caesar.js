const caesar = function(string, shift) {
    const upperA = 'A'.charCodeAt(0);
    const upperZ = 'Z'.charCodeAt(0);
    const lowerA = 'a'.charCodeAt(0);
    const lowerZ = 'z'.charCodeAt(0);
    const range = 1 + upperZ - upperA;

    let encrypted = '';

    for (let i = 0; i < string.length; i++) {
        if (/[a-z]/i.test(string[i])) {
            const charCode = string.charCodeAt(i);

            const floor = (charCode >= upperA && charCode <= upperZ) ? upperA : lowerA;

            let absoluteShift = charCode - floor + shift;
            absoluteShift %= range;
            if (absoluteShift < 0) {
                absoluteShift += range;
            }

            const shiftedCode = floor + absoluteShift;

            encrypted += String.fromCharCode(shiftedCode);
        } else {
            encrypted += string[i];
        }
    }

    return encrypted;
}

module.exports = caesar
