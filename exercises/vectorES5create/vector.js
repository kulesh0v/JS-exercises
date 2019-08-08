function Vector(x1, y1, x2, y2) {
  return Object.create(Vector.prototype, {
    x: {writable: true, configurable: true, value: x2 - x1},
    y: {writable: true, configurable: true, value: y2 - y1},
    length: {
      configurable: false,
      get: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
    }
  });
}

Vector.prototype.plus = function () {
  var result = Vector(0, 0, this.x, this.y);
  for (let i = 0; i < arguments.length; i++) {
    result.x += arguments[i].x;
    result.y += arguments[i].y;
  }
  return result;
};

Vector.prototype.isEqual = function (b) {
  return this.x === b.x && this.y === b.y;
};
Vector.prototype.toString = function () {
  return 'vector (' + this.x + ', ' + this.y + ')';
};

if (module) {
  module.exports = Vector;
}