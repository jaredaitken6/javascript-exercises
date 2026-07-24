const findTheOldest = function(people) {
    let thisYear = new Date();
    
  const yearsAlive = people.map((value) => {
    if (value.yearOfDeath === undefined) {
      value.yearOfDeath = thisYear.getFullYear()
    }
    return value.yearOfDeath - value.yearOfBirth;
  });

  for (let i = 0; i < people.length; i++) {
    people[i].yearsLiving = yearsAlive[i];
  }


people.sort((a, b) => b.yearsLiving - a.yearsLiving);

return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
