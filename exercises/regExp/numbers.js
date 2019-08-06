function isNumber(str) {
  const number = /^[+-]?[\d]*(E[+-])?((?<=[\d])\.|\.(?=[\d]))?[\d]*(e[+-]?)?[\d]*$/;
  return number.test(str);
}

module.exports = isNumber;