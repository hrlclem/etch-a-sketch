const container = document.getElementById("container");

let gridSize = 16;

function makeGrid(screenSize) {
  for (let i = 0; i < screenSize ** 2; i++) {
      let square = document.createElement("div");
      square.classList.add('square');
      square.style.backgroundColor = 'blue';
      container.appendChild(square);
  }
  console.log('print')
  container.style.gridTemplateColumns = 'repeat($(screen), auto)';
  container.style.gridTemplateRows = 'repeat($(screen), auto)';
};

makeGrid(gridSize);


