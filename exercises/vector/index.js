(function () {
  function createRow() {
    var table = document.getElementById('table');
    var tr = document.createElement('tr');
    for (var i = 0; i < 4; i++) {
      var td = document.createElement('td');
      var input;
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
          break;
        case 1:
          input.placeholder = 'second point';
          break;
        case 2:
          input.placeholder = 'vector(x, y)';
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
    var table = document.getElementById('table');
    table.removeChild(row);
  }

  document.getElementById('add-vector').addEventListener('click', createRow);
})();