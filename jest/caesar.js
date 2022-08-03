const letters = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

// callbacks

const isNumber = (data) => typeof data === 'number';

const toNumbers = (el) => {
  if (Object.prototype.hasOwnProperty.call(letters, el)) {
    return letters[el];
  } return el;
};

const returnToLetters = (el) => {
  if (typeof el !== 'number') {
    return el;
  } return Object.keys(letters)[el];
};

const caesar = (text, key) => {
  // this callback needs th key parameter
  const calcCipher = (el) => {
    if (!isNumber(el)) { return el; }
    if (el + key > 25) {
      return (el + key) - 26;
    } return el + key;
  };

  const arr = text.toLowerCase().split('');

  const arrNum = arr.map(toNumbers);
  const newNumArr = arrNum.map(calcCipher);

  const arrResult = newNumArr.map(returnToLetters);

  return arrResult.join('');
};

export default caesar;
