const removeFromArray = function(arrayValue, ...toRemove) {
    let theArray = arrayValue;
    
    for(const removedElement of toRemove){
        for(i=0; i<theArray.length; i++){
            const item = theArray[i];
            if(item !== removedElement){
                continue;
            }
            theArray.splice(i,1);
        }
    }
    return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;
