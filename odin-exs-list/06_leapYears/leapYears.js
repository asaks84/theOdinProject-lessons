const leapYears = function (a) {
    const yearTest = a;

    if (yearTest % 4 == 0 && yearTest % 100 != 0 ||
        yearTest % 100 == 0 && yearTest % 400 == 0) {
        return true;
    };
    return false;

    /*
    if(yearTest%4 == 0){
        if(yearTest%100 == 0){
            if(yearTest%400 == 0) {
                return true;
            };
            return false;
        };
        return true;
    };
    return false;
    */
};

// Do not edit below this line
module.exports = leapYears;
