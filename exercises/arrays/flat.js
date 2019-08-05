let flat = (arr) => {
  let res = [];
  arr.forEach(item => {
      if (Array.isArray(item)) {
        res = res.concat(flat(item));
      } else {
        res.push(item);
      }
    }
  );
  return res;
};

module.exports = flat;