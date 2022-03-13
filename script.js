const container = document.getElementById("container");

let gridSize = 16;

function makeGrid(screen) {
  for (let i = 0; i < screen ** 2; i++) {
      const square = document.createElement("div");
      square.classList.add('square');
      square.style.backgroundColor = 'blue';
      container.appendChild(square);
      container.style.gridTemplateColumns = 'repeat($(screen), auto)';
      container.style.gridTemplateRows = 'repeat($(screen), auto)';
  }
};

makeGrid(gridSize);