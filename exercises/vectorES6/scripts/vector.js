class Vector {
  constructor(x1, y1, x2, y2) {
    this.x = x2 - x1;
    this.y = y2 - y1;
  }

  plus() {
    let result = new Vector(0, 0, this.x, this.y);
    for (let i = 0; i < arguments.length; i++) {
      result.x += arguments[i].x;
      result.y += arguments[i].y;
    }
    return result;
  };

  toString() {
    return 'vector (' + this.x + ', ' + this.y + ')';
  };

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  isEqual(b){
    return this.x === b.x && this.y === b.y;
  }
}

module.exports = Vector;