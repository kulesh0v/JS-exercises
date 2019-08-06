'use strict';
let http = require("q-io/http");
http.read('http://localhost:7000')
  .then(res => http.read('http://localhost:7001/' + res))
  .then(res => console.log(JSON.parse(res)))
  .catch(console.log);