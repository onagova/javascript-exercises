const removeFromArray = function(array) {
    for (let i = 1; i < arguments.length; i++) {
        while (true) {
            const j = array.indexOf(arguments[i]);

            if (j < 0) break;

            array.splice(j, 1);
        }
    }

    return array;
}

module.exports = removeFromArray
