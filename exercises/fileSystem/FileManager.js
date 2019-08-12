const fs = require('fs');
const fsp = fs.promises;

class FileManager {
  constructor(root) {
    this.root = root;
  }

  getPath(req) {
    return `${this.root}/${req.params[0]}`
  }

  static createError(req, res, err) {
    console.log(err);
    if (err.code === 'ENOENT') {
      return {status: 404, msg: 'This directory does not exist'};
    }
    if (err.errno === 'EEXIST') {
      return {status: 400, msg: `${req.params[0]} already exist`};
    }

    return {status: 400, msg: `${req.params[0]} unexpected error`};
  }

  async createFile(req, res) {
    try {
      await fsp.open(this.getPath(req), 'w');
      res.send(`File ${req.params[0]} created`);
    } catch (err) {
      const toSend = FileManager.createError(req, res, err);
      res.status(toSend.status).send(toSend.msg);
    }
  }


  async createDirectory(req, res) {
    try {
      await fsp.mkdir(this.getPath(req));
      res.send(`Directory ${req.params[0]} created`);
    }
    catch (err) {
      const toSend = FileManager.createError(req, res, err);
      res.status(toSend.status).send(toSend.msg);
    }
  }

  async openDirectory(req, res) {
    try {
      const data = await fsp.readdir(this.getPath(req));
      res.send(data);
    } catch (err) {
      const toSend = FileManager.createError(req, res, err);
      res.status(toSend.status).send(toSend.message);
    }
  }

  async openFile(req, res) {
    try {
      await fsp.open(this.getPath(req));
      res.sendFile(`/${this.getPath(req)}`, {root: __dirname})
    } catch (err) {
      res.send(`${req.params[0]} does not exist`);
    }
  }

  open(req, res) {
    if (req.params[0] === '') {
      req.query.type = 'd';
    }
    if (req.query.type === 'd') {
      this.openDirectory(req, res);
    }
    else {
      this.openFile(req, res);
    }
  }

  create(req, res) {
    if (req.query.type === 'd') {
      this.createDirectory(req, res);
    }
    else {
      this.createFile(req, res);
    }
  }
}

module.exports = FileManager;