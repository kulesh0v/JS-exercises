'use strict';
let promise = new Promise(function (fulfill, reject) {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

const onRejected = (error) => console.log(error.message);

promise.then(result => console.log(result),
  error => onRejected(error));