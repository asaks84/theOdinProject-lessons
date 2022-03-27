const controls = document.querySelectorAll('input[name=control]');
const grid = document.querySelector('#grid');
const reset = document.querySelector('#reset');
const clear = document.querySelector('#clear');
const colorPicker = document.querySelector("input[type=color]");
const sizeSelect = document.querySelector("input[type=range]");


// DEFAULTS 

const defaultMode = controls[0];
const defaultSize = 16;
const defaultColor = '#525252';
const eraser = '#dbdbdb'

let option = document.querySelector('input[name=control]:checked').value;
let size = defaultSize;
let color = defaultColor;


// SETTINGS FUNCTIONS

colorPicker.setAttribute('value', defaultColor);
colorPicker.onchange = (e) => setColor(e.target.value);
sizeSelect.onchange = (e) => setGridSize(e.target.value);

function setGridSize(e) {
    size = e;
    clearGrid();
}

function setMode() {
    option = document.querySelector('input[name=control]:checked').value;
    
    switch (option) {
        case 'colorPicker':
            setColor(colorPicker.value)
            break;
        case 'eraser':
            setColor(eraser)
            break;
    }
};

function setColor(newColor) {
    color = newColor;
};


// GRID CHANGES

function rainbow() {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    return color = `rgb(${randomR}, ${randomG}, ${randomB})`
}

function changeColor(e) {
    if(option == 'rainbow'){ rainbow() };
    this.style.backgroundColor = color;
};

function gridGenerator(gridSize) {
    const area = gridSize * gridSize;

    grid.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); 
        grid-template-rows: repeat(${gridSize}, 1fr);`

    for (i = 1; i <= area; i++) {
        const gridContent = document.createElement('div');
        gridContent.addEventListener('mouseleave', changeColor)
        grid.appendChild(gridContent);

    };
};

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    };
    gridGenerator(size);
};

function restart() {
    size = defaultSize
    clearGrid();
    colorPicker.value = defaultColor;
    defaultMode.click();
};

reset.addEventListener('click', restart);
clear.addEventListener('click', clearGrid);
controls.forEach((e) => e.addEventListener('click', setMode));
gridGenerator(size);