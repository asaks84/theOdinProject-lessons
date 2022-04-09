const getTheTitles = function(books) {
    return books.sort(order).map((value) => value.title);
};

// Do not edit below this line
module.exports = getTheTitles;
