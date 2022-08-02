const validation = (a, b) => (!((typeof a !== 'number' || typeof b !== 'number')));

const add = (a, b) => ((validation(a, b)) ? a + b : 'invalid');
const sub = (a, b) => ((validation(a, b)) ? a - b : 'invalid');
const multiply = (a, b) => ((validation(a, b)) ? a * b : 'invalid');
const divide = (a, b) => ((validation(a, b)) ? a / b : 'invalid');

const calc = {
  add, sub, multiply, divide,
};

export default calc;
