const ftoc = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;
  return roundToOneDecimal(celsius);
}

const ctof = function(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;
  return roundToOneDecimal(fahrenheit);
}

module.exports = {
  ftoc,
  ctof
}

function roundToOneDecimal(n) {
  n *= 10;
  n = Math.round(n);
  return n / 10;
}