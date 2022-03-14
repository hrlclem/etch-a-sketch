const container = document.querySelector(".container");

let gridSize = 16;

function makeGrid(col , rows) {
  for(let i = 0; i < (col * rows); i++) {
      const div = document.createElement('div') 
      container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
      container.appendChild(div).classList.add('box')
  }
}

makeGrid(16,16); 





