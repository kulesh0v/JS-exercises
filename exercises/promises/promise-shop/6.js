'use strict';
let promise = Promise.reject(new Error('MY ERROR'));
promise.catch(error => console.log(error.message));