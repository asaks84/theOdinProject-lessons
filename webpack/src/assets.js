import myName from './myName';
// Lodash, now imported by this script

function component() {
    const element = document.createElement('div');

    // use your function!
    element.textContent = myName('Cody');
    return element;
  }

  
  document.body.appendChild(component());
  