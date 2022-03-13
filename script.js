const container = document.getElementById("container");

function makeGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j=0;j < size; j++) {
      let square = document.createElement('div');
      square.className = 'square';
      document.body.appendChild(square);
    }
    let br = document.createElement('br');
    document.body.appendChild(br);
  }
  
};
