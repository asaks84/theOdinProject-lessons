const reverseString = function(text) {

    return text.split("").reverse().join("");
    
    /* my first solution
    const initText = text;
    let result = '';
    for(i=initText.length-1;i>=0;i--){
        result += initText[i];
    }
    return result;
    */
};

// Do not edit below this line
module.exports = reverseString;
