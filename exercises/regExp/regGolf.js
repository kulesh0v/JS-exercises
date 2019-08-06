function regGolf() {
  let res = verify(/ca[rt]/, ["my car", "bad cats"], ["camper", "high art"]);

  res += verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop"]);

  res += verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

  res += verify(/[\w]+ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

  res += verify(/ [.,:;]/,
    ["bad punctuation ."],
    ["escape the dot"]);

  res += verify(/[\w]{7,}/,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

  res += verify(
    /\b[^e ]+\b/,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape"]
  );
  return res;
}

function verify(regexp, yes, no) {
  let errorsAmount = 0;
  if (regexp.source === "...") return;
  yes.forEach(function (s) {
    if (!regexp.test(s)) {
      errorsAmount++;
      console.log("Не нашлось '" + s + "'");
    }
  });
  no.forEach(function (s) {
    if (regexp.test(s)) {
      errorsAmount++;
      console.log("Неожиданное вхождение " + "'" + s + "'");
    }
  });
  return errorsAmount;
}

module.exports = regGolf;