function askFoo() {
  return new Promise(function (resolve, reject) {
    setTimeout(
      function () {
        resolve('foo');
      }, 300);
  });
}

function run(generator) {
  const go = (result) => {
    if (result.done) {
      return result.value;
    }
    result.value
      .then(res => go(it.next(res)))
      .catch(err => go(it.throw(err)))
  };

  const it = generator();
  go(it.next());
}

run(function* () {
  try {
    const foo = yield askFoo();
    console.log(foo);
  } catch (e) {
    console.log(e.message());
  }
});

