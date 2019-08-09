function *factorial(n){
  for(let i = 1, j = 1; i<=n;i++){
    j *= i;
    yield j
  }
}

for (let n of factorial(5)) {
  console.log(n)
}
// 1, 2, 6, 24, 120
