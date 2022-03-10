const repeatString = function(hey, num) {
    const toRepeat = hey;
    if(num<0){
        return "ERROR";
    }
    return toRepeat.repeat(num); 
};

// Do not edit below this line
module.exports = repeatString;
