const leapYears = function(year) {
    return (year % 4) ? false :
        (year % 100) ? true :
        (year % 400) ? false :
        true;
}

module.exports = leapYears
