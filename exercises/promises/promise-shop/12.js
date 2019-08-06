'use strict';
let http = require("q-io/http");
http.read('http://localhost:1337')
  .then(res=>console.log(JSON.parse(res)))
  .catch(console.log);