function changeQuotes(str) {
  let reg = RegExp("'(?![\\w])|(?<![\\w])'","g");
  return str.replace(reg,'"');
}

module.exports = changeQuotes;