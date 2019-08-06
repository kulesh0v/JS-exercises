'use strict';
const all = (p1, p2) => {
  return new Promise((fulfill, reject) => {
    let counter = 0;
    let res = [];
    p1.then(result => {
      res[0] = result;
      counter++;
      if (counter >= 2) {
        fulfill(res);
      }
    });
    p2.then(result => {
      res[1] = result;
      counter++;
      if (counter >= 2) {
        fulfill(res);
      }
    });
  });
};
all(getPromise1(), getPromise2())
  .then(res => console.log(res));