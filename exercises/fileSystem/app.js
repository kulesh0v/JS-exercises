const express = require('express');
const fs = require('fs');
const app = express();

function createError(req, res, err) {
  if (err.errno === -4058) {
    return {status: 400, msg: 'This directory does not exist'};
  }
  if (err.errno === -4075) {
    return {status: 400, msg: `${req.params[0]} already created`};
  }

  return {status: 400, msg: `${req.params[0]} you lose`};
}

function createFile(req, res) {
  fs.open(req.params[0], 'wx', err => {
    if (err) {
      const toSend = createError(req, res, err);
      res.status(toSend.status).send(toSend.msg);
    } else {
      res.send(`File ${req.params[0]} was created`);
    }
  });
}

function createDirectory(req, res) {
  fs.mkdir(req.params[0], (err) => {
    if (err) {
      const toSend = createError(req, res, err);
      res.status(toSend.status).send(toSend.msg);
    } else {
      res.send(`Directory ${req.params[0]} was created`);
    }
  });
}

app.post('/*', function (req, res) {
  if (req.query.type === 'd') {
    createDirectory(req, res);
  }
  else {
    createFile(req, res);
  }
});

function openDirectory(req, res) {
  fs.readdir(req.params[0], (err, data) => {
    if (err) {
      const toSend = createError(req, res, err);
      res.status(toSend.status).send(toSend.message);
    } else {

      res.send(data);
    }
  })
}

app.get('/*', function (req, res) {
  if (req.query.type === 'd') {
    openDirectory(req, res);
  }
  else {
    fs.open(req.params[0], 'r', (err, fd) => {
      if (err) {
        res.send(`${req.params[0]} does not exist`);
      }
      res.sendFile(`/${req.params[0]}`, {root: __dirname})
    });
  }
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});