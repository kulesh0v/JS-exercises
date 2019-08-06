'use strict';
const parsePromised = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(process.argv[2]));
    } catch (e) {
      reject(e);
    }
  });
};

parsePromised().catch(error=>console.log(error.message));