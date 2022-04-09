const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (array) {
  return array.reduce((sum, element) => {
    return sum + element;
  },0);
};

const multiply = function (array) {
    if(array.length){
      return array.reduce((result, element) => result * element);
    }else return 0;
};

const power = function (a,b) {
  return Math.pow(a,b);
};

const factorial = function (num) {
  let result = num;
  if(num == 0) return 1
  for (i=num-1; i>0; i--){
    result *= i;
  };
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
