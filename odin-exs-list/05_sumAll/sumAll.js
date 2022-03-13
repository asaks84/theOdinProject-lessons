const sumAll = function(num1, num2) {
    let sum = num1+num2;

    if(typeof(sum) !== 'number' || num1<0 || num2<0) return "ERROR"; 
    if(num1>num2){
        const temp = num1;
        num1 = num2;
        num2 = temp;
    };
    for(i=num2-num1;i>num1;i--){
        sum += i;
    };
    return sum;        
};

// Do not edit below this line
module.exports = sumAll;
