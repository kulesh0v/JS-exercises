const fs = require('fs');
const fsp = fs.promises;

class FileManager {
  constructor(root) {
    this.root = root;
  }

  getPath(src) {
    return `${this.root}/${src}`
  }

  createFile(src) {
    return fsp.open(this.getPath(src), 'w');
  }

  createDirectory(src) {
    return fsp.mkdir(this.getPath(src));
  }

  openDirectory(src) {
    return fsp.readdir(this.getPath(src));
  }

  openFile(src) {
    return fsp.open(this.getPath(src));
  }

  async open(src) {
    let result;
    try {
      result = await this.openDirectory(src);
      return result;
    } catch (e) {
      if (e.code !== 'ENOTDIR') {
        throw e;
      }
    }

    return this.openFile(src);
  }

  async create(src, type) {
    try {
      if (type === 'd') {
        await this.createDirectory(src);
        return `Directory ${src} created`;
      }
      else {
        await this.createFile(src);
        return `File ${src} created`;
      }
    } catch (e) {
      throw e;
    }
  }
}

module.exports = FileManager;