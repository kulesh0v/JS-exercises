const number = /^[+-]?[\d]*(E[+-])?((?<=[\d])\.|\.(?=[\d]))?[\d]*(e[+-]?)?[\d]*$/;

// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
  "1e+12"].forEach(function(s) {
  if (!number.test(s))
    console.log("Не нашла '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
  "."].forEach(function(s) {
  if (number.test(s))
    console.log("Неправильно принято '" + s + "'");
});

function isNumber(str) {
  const number = /^[+-]?[\d]*(E[+-])?((?<=[\d])\.|\.(?=[\d]))?[\d]*(e[+-]?)?[\d]*$/;
  return number.test(str);
}

module.exports = isNumber;