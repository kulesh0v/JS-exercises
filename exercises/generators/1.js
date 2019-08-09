function* range(from, to) {
  for (let i = from; i <= to; i++) {
    console.log('Before: ', i);
    i = yield i + 1;
    console.log('After: ', i);
  }
}

const it = range(5, 10);
let i = 5;
while ((_ => {
  const x = it.next(i);
  console.log(x);
  if (x.done) {
    return false
  }
  i = x.value;
  return true;
})(i)) ;