'use strict';
const alwaysThrow = () => {
  throw new Error('OH NOES');
};

const iterate = (value) => {
  console.log(value);
  return value + 1;
};
Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrow)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(error => console.log(error.message));
