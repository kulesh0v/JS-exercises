const assert = require('chai').assert;
const request = require('axios');
describe('fileSystem', function () {
  describe('create directories', function () {
    it('should create directory in main', function () {
      return request
        .post('http://localhost:3000/Photo?type=d')
        .then(res => assert.equal(res.data, 'Directory Photo created'));
    });

    it('should try to create directory second time', function () {
      return request
        .post('http://localhost:3000/Photo?type=d')
        .catch(err => assert.equal(err.message, 'Request failed with status code 400'));
    });

    it('should create directory in directory', function () {
      return request
        .post('http://localhost:3000/Photo/Minsk2019?type=d')
        .then(res => assert.equal(res.data, 'Directory Photo/Minsk2019 created'));
    });

    it('should create directory in main', function () {
      return request
        .post('http://localhost:3000/Documents?type=d')
        .then(res => assert.equal(res.data, 'Directory Documents created'));
    });
  });

  describe('create files', function () {
    it('should create first file', function () {
      return request
        .post('http://localhost:3000/Photo/Minsk2019/1.jpeg?type=f')
        .then(res => assert.equal(res.data, 'File Photo/Minsk2019/1.jpeg created'));
    });
    it('should create second file ', function () {
      return request
        .post('http://localhost:3000/Photo/Minsk2019/2.jpeg?')
        .then(res => assert.equal(res.data, 'File Photo/Minsk2019/2.jpeg created'));
    });
    it('should try to create some file a second time', function () {
      return request
        .post('http://localhost:3000/Photo/Minsk2019/2.jpeg?type=f')
        .catch(err => assert.equal(err.message, 'Request failed with status code 400'));
    });
    it('should create third file', function () {
      return request
        .post('http://localhost:3000/Documents/Lab1.txt?')
        .then(res => assert.equal(res.data, 'File Documents/Lab1.txt created'));
    });
  });
  describe('should open directories', function () {
    it('should open directory', function () {
      return request
        .get('http://localhost:3000/Photo')
        .then(res => assert.equal(res.data.toString(), 'Minsk2019'));
    });
    it('should open main directory ', function () {
      return request
        .get('http://localhost:3000/')
        .then(res => assert.equal(res.data.toString(), 'Documents,Photo'));
    });
    it('should try to open directory with wrong path ', function () {
      return request
        .get('http://localhost:3000/Phooto')
        .catch(err => assert.equal(err.message, 'Request failed with status code 404'));
    });
  });

  describe('should open files', function () {
    it('should open file', function () {
      return request
        .get('http://localhost:3000/Photo/Minsk2019/1.jpeg')
        .then(res => assert(res));
    });
    it('should try to open with wrong path', function () {
      return request
        .get('http://localhost:3000/Photo/Minsk2019/1213.jpeg')
        .catch(err => assert.equal(err.message, 'Request failed with status code 404'));
    });
  });
});