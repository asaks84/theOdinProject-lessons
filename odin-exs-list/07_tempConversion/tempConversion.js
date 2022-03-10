const ftoc = function(f) {
  let result = (f-32)*(5/9);
  if(Number.isInteger(result) != true){ result = parseFloat(result.toFixed(1)); }
  return result;
};

const ctof = function(c) {

  let result = (9/5) * c + 32;
  if(Number.isInteger(result) != true){ result = parseFloat(result.toFixed(1)); }
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
