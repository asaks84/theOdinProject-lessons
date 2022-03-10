const sumAll = function(a, b) {
    const num1 = a;
    const num2 = b;
    let sum = num1+num2;

    if( typeof(sum) !== 'number' || num1<0 || num2<0)   { return "ERROR"; }
    if(num1>num2){
        for(i=num1-num2;i>num2;i--){
            sum += i;
        }
    }
    for(i=num2-num1;i>num1;i--){
        sum += i;
    }
    return sum;        
};

// Do not edit below this line
module.exports = sumAll;
