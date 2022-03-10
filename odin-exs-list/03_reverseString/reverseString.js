const reverseString = function(text) {
    const initText = text;
    let result = '';
    for(i=initText.length-1;i>=0;i--){
        result += initText[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
