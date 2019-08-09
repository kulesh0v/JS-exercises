const fs = require('fs');

function run(generator) {
  const it = generator(go);

  function go(err, result) {
    console.log('Go start work: ' + result);
    if (err) {
      return it.throw(err);
    }
    console.log('Before next');
    it.next(result)
  }

  go();
}


run(function* (done) {
  let firstFile = null;
  try {
    // catch exception
    console.log('Before yield');
    const dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
    console.log('After yield');
    firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
  }
  catch (e) {
    console.log('In catch');
    firstFile = null;
  }
  console.log(firstFile);
});
