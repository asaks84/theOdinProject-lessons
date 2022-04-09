const palindromes = function (str) {
    str = str.toLowerCase();
    const punctRemove = /[^A-Za-z]/g;
    const spaceRemove = ' ';
    str = str.replace(punctRemove, "");
    const rev = str.split("").reverse().join("");
    return str == rev;
};

// Do not edit below this line
module.exports = palindromes;
