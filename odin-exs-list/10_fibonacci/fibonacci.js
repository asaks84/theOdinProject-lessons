const fibonacci = function(num) {
    if(num<0) return "OOPS";
    let preced = 0;
    let result = 1;
    for(i=1; i<num; i++){
        const temp = result;
        result = preced + temp;
        preced = temp;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
