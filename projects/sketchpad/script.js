const controls = document.querySelectorAll('input[name=control]');
const grid = document.querySelector('#grid');
const reset = document.querySelector('#reset');
const clear = document.querySelector('#clear');
const colorPicker = document.querySelector('input[type=color]');
const sizeSelect = document.querySelector('input[type=range]');
const onClick = document.querySelector('input[type=checkbox]');

let click = false;
document.body.onmouseup = function changeFalse() { click = false; };
document.body.onmousedown = function changeTrue() { click = true; };

// DEFAULTS

const defaultMode = controls[0];
const defaultSize = 32;
const defaultColor = '#525252';
const eraser = '#dbdbdb';

// INIT

let option = document.querySelector('input[name=control]:checked').value;
let size = defaultSize;
let color = defaultColor;
sizeSelect.value = defaultSize;

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

function changeColor(e) {
  if (onClick.checked && e.type === 'mouseover' && !click) return;
  if (option === 'rainbow') {
    rainbow();
  }
  this.style.backgroundColor = color;
}

// SETTINGS FUNCTIONS

function gridGenerator(gridSize) {
  const area = gridSize * gridSize;

  grid.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); 
          grid-template-rows: repeat(${gridSize}, 1fr);`;

  for (let i = 1; i <= area; i += 1) {
    const gridContent = document.createElement('div');
    gridContent.addEventListener('mouseover', changeColor);
    gridContent.addEventListener('mousedown', changeColor);
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

colorPicker.setAttribute('value', defaultColor);
colorPicker.onchange = (e) => setColor(e.target.value);
sizeSelect.addEventListener('input', (e) => setGridSize(e.target.value));

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

// GRID CHANGES

function restart() {
  size = defaultSize;
  sizeSelect.value = defaultSize;
  clearGrid();
  colorPicker.value = defaultColor;
  defaultMode.click();
  onClick.click();
}

reset.addEventListener('click', restart);
clear.addEventListener('click', clearGrid);
controls.forEach((e) => e.addEventListener('click', setMode));
gridGenerator(size);
