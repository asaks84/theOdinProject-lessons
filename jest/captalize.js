const captalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const divideWords = (str) => {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    words[i] = captalize(words[i]);
  }

  return words.join(' ');
};

export default divideWords;
