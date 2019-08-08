function Vector(x1, y1, x2, y2) {
  this.x = x2 - x1;
  this.y = y2 - y1;

  this.isEqual = function (b) {
    return this.x === b.x && this.y === b.y;
  };
}

Object.defineProperty(Vector.prototype, 'length', {
  get: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});
Vector.prototype.plus = function () {
  var result = new Vector(0, 0, this.x, this.y);
  for (let i = 0; i < arguments.length; i++) {
    result.x += arguments[i].x;
    result.y += arguments[i].y;
  }
  return result;
};
Vector.prototype.toString = function () {
  return 'vector (' + this.x + ', ' + this.y + ')';
};

if (module) {
  module.exports = Vector;
}