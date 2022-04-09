// const people = [
//     {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//     },
//     {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//     },
//     {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//     },
// ]
function findAge(birth, death) {
    if (!death) death = new Date().getFullYear();
    return death - birth;
}

const findTheOldest = function (people) {
    const order = (a, b) => {
        const firstAge = findAge(a.yearOfBirth, a.yearOfDeath);
        const secondAge = findAge(b.yearOfBirth, b.yearOfDeath);
        return firstAge > secondAge ? -1 : 1;
    };
    return people.sort(order)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
