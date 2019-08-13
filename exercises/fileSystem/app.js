const express = require('express');
const fs = require('fs');
const fsp = fs.promises;
const app = express();
const FileManager = require('./FileManager.js');
let fileManager;

function createError(req, err) {
  if (err.code === 'ENOENT' || err.code === 'ENOTDIR') {
    return {status: 404, message: 'This src does not exist'};
  }
  if (err.code === 'EEXIST') {
    return {status: 400, message: `${req.params[0]} already exist`};
  }
  return {status: 500, message: `${req.params[0]} unexpected error`};
}

app.post('/*', async function (req, res) {
  let toSend = {};
  try {
    const result = await fileManager.create(req.params[0], req.query.type);
    toSend.status = 200;
    toSend.message = result;
  } catch (e) {
    toSend = createError(req, e);
  }
  res.status(toSend.status).send(toSend.message);
});


app.get('/*', async function (req, res) {
  let toSend = {};
  try {
    const result = await fileManager.open(req.params[0]);
    toSend.status = 200;
    toSend.message = result;
  } catch (e) {
    toSend = createError(req, e);
  }
  res.status(toSend.status).send(toSend.message);
});

const port = process.env.PORT || 3333;
app.listen(port, async function () {
  const config = fs.readFileSync('config.json');
  fileManager = new FileManager(JSON.parse(config).root);
  try {
    const res = await fsp.mkdir(fileManager.root);
  }
  catch (err) {
    if (err.code === 'EEXIST') {
      console.log('Root directory already exist');
    } else {
      console.log('Unexpected error:\n', err);
    }
  }
  console.log('Example app listening on port ' + port);
});
