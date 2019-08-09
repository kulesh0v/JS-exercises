const fs = require('fs');

function run(generator) {
  const it = generator(go);

  function go(err, result) {
    console.log('Go');
    if (err) {
      console.log(err.message);
      return it.throw(err);
    }
    console.log('Before next, result: ', result);
    const a = it.next(result);
    console.log('a = ', a);
  }

  go();
}


run(function* (done) {
  let firstFile = null;
  try {
    // catch exception
    console.log('Before yield');
    const dirFiles = yield fs.readdir('1213', done); // No such dir
    console.log('After yield, dir:', dirFiles);
    firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
  }
  catch (e) {
    console.log('In catch');
    firstFile = null;
  }
  console.log(firstFile);
});

1
2