let findTheOldest = function(people) {
    return people.sort((a, b) => {
        const aAge = getAge(a.yearOfBirth, a.yearOfDeath);
        const bAge = getAge(b.yearOfBirth, b.yearOfDeath);
        return (aAge < bAge) ? 1 : -1;
    })[0];
}

function getAge(birth, death) {
    death = death ?? (new Date()).getFullYear();
    return death - birth;
}

module.exports = findTheOldest
