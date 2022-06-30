const controls = document.querySelectorAll('input[name=control]');
const grid = document.querySelector('#grid');
const reset = document.querySelector('#reset');
const clear = document.querySelector('#clear');
const colorPicker = document.querySelector('input[type=color]');
const sizeSelect = document.querySelector('input[type=range]');
const onClick = document.querySelector('input[type=checkbox]');

// DEFAULT ELEMENTS

const defaultMode = controls[0];
const defaultSize = 32;
const defaultColor = '#525252';
const eraser = '#dbdbdb';
let click = false;

//
// APP
//

let option = document.querySelector('input[name=control]:checked').value;
let size = defaultSize;
let color = defaultColor;

// Basic Color Functions

function setColor(newColor) {
  color = newColor;
}

function rainbow() {
  const colorR = Math.floor(Math.random() * 256);
  const colorG = Math.floor(Math.random() * 256);
  const colorB = Math.floor(Math.random() * 256);
  color = `rgb(${colorR}, ${colorG}, ${colorB})`;
  return color;
}

colorPicker.setAttribute('value', defaultColor);
colorPicker.onchange = (e) => setColor(e.target.value);

function changeColor(e) {
  if (onClick.checked && e.type === 'mouseover' && !click) return;
  if (option === 'rainbow') {
    rainbow();
  }
  this.style.backgroundColor = color;
}

//
// GRID FUNCTIONS
//

function gridGenerator(gridSize) {
  const area = gridSize * gridSize;

  grid.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); 
          grid-template-rows: repeat(${gridSize}, 1fr);`;

  for (let i = 1; i <= area; i += 1) {
    const gridContent = document.createElement('div');

    gridContent.addEventListener('mouseover', changeColor);
    gridContent.addEventListener('mousedown', changeColor);

    // prevent to not drag item
    gridContent.addEventListener('dragstart', (e) => { e.preventDefault(); });
    gridContent.addEventListener('drop', (e) => { e.preventDefault(); });

    grid.appendChild(gridContent);
  }
}

function clearGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  gridGenerator(size);
}

function setGridSize(e) {
  size = e;
  clearGrid();
}

//
// APP OPTIONS
//

function setMode() {
  option = document.querySelector('input[name=control]:checked').value;

  switch (option) {
    case 'colorPicker':
      setColor(colorPicker.value);
      break;
    case 'eraser':
      setColor(eraser);
      break;
    default:
      break;
  }
}

function restart() {
  size = defaultSize;
  sizeSelect.value = defaultSize;
  clearGrid();
  colorPicker.value = defaultColor;
  defaultMode.click();
  onClick.click();
}

// ADD FUNCTIONS ON CONTROLS

reset.addEventListener('click', restart);
clear.addEventListener('click', clearGrid);
controls.forEach((e) => e.addEventListener('click', setMode));

// Adjust grid size
sizeSelect.addEventListener('input', (e) => setGridSize(e.target.value));

// Set initial value into range grid input
sizeSelect.value = defaultSize;

// Make it to change when mouse button is clicked
document.body.onmouseup = function changeFalse() { click = false; };
document.body.onmousedown = function changeTrue() { click = true; };

// start app
gridGenerator(size);
