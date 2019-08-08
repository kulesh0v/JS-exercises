const Vector = require('./vector.js');
(function (global) {

  function onChangePoint(tr) {
    let inputs = tr.querySelectorAll('input');
    let coord1 = getCoordinate(inputs[0].value);
    let coord2 = getCoordinate(inputs[1].value);
    if (coord1 && coord2) {
      let vector = new Vector(coord1[0], coord1[1], coord2[0], coord2[1]);
      inputs[2].value = vector.toString();
      return vector;
    }
    return null;
  }

  function getCoordinate(value) {
    let reg = /(\+|-)?\d+(\.\d+)?/g;
    let result = value.match(reg);
    if (result && result.length === 2) {
      return result;
    }
    return null;
  }

  function createRow() {
    let table = document.getElementById('table');
    let tr = document.createElement('tr');
    for (let i = 0; i < 4; i++) {
      let td = document.createElement('td');
      let input;
      if (i !== 3) {
        input = document.createElement('input');
        input.type = 'text';
      } else {
        input = document.createElement('button');
        input.type = 'button';
      }
      switch (i) {
        case 0:
          input.placeholder = 'first point';
          input.addEventListener('input', onChangePoint.bind(null, tr));
          break;
        case 1:
          input.placeholder = 'second point';
          input.addEventListener('input', onChangePoint.bind(null, tr));
          break;
        case 2:
          input.placeholder = 'vector(x, y)';
          input.readOnly = true;
          break;
        case 3:
          input.innerHTML = 'Remove';
          input.addEventListener('click', removeRow.bind(null, tr));
          break;
      }
      td.appendChild(input);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  function removeRow(row) {
    let table = document.getElementById('table');
    table.removeChild(row);
  }

  function getSum() {
    let trows = document.getElementsByTagName('tr');
    let vectors = [];
    for (let i = 0; i < trows.length; i++) {
      let vector = onChangePoint(trows[i]);
      if (vector) {
        vectors.push(vector);
      } else {
        document.getElementById('result').innerText = 'Error: you have invalid rows';
        return;
      }
    }
    if(!trows.length){
      document.getElementById('result').innerText = 'Error: you hasn\'t rows';
      return;
    }
    let firstVector = vectors.pop();
    document.getElementById('result').innerText = 'Sum:' + firstVector.plus.apply(firstVector, vectors).toString();

  }

  document.getElementById('add-vector').addEventListener('click', createRow);
  document.getElementById('get-sum').addEventListener('click', getSum);
})(this);