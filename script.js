const container = document.querySelector(".container");

let gridSize = 4;

function makeGrid(col , rows) {
  for(let i = 0; i < (col * rows); i++) {
      const div = document.createElement('div') 
      container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
      container.appendChild(div).classList.add('square')
      div.innerHTML = ".";
  }
}

makeGrid(gridSize, gridSize); 