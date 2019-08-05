function changeQuotes(str) {
  let reg = /('[^']+')/g;
  let found = str.match(reg);
  if (found) {
    found.forEach(s => {
        let tmp = s;
        s = s.replace('\'', '"');
        s = s.replace('\'', '"');
        str = str.replace(tmp, s);
      }
    );
  }
  return str;
}

module.exports = changeQuotes;