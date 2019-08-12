const express = require('express');
const fs = require('fs');
const app = express();
const FileManager = require('./FileManager.js');
let fileManager;


app.post('/*', function (req, res) {
  fileManager.create(req, res);
});


app.get('/*', function (req, res) {
  fileManager.open(req, res);
});

const port = /*process.env.PORT ||*/ 3000;
app.listen(port, function () {
  const config = fs.readFileSync('config.json');
  fileManager = new FileManager(JSON.parse(config).root);
  fs.mkdir(fileManager.root, _ => { // FIXME
  });
  console.log('Example app listening on port ' + port);
});
