const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return num1 - num2;
  }
      if (num1 < num2) {
        return num2 - num1
      } else {
        return num1 - num2;
      }
};

const sum = function(array) {
	let newSum = array.reduce(((acc, current) => acc + current), 0);
  return newSum;
};

const multiply = function(array) {
  let multiplyAll = array.reduce(((acc, current) => acc * current), 1);
return multiplyAll;
};

const power = function(num, pow) {
	let newArray = [];
  for (let i = 0; i < pow; i++) {
    newArray.push(num);
  }
  let multiplyAll = newArray.reduce(((acc, current) => acc * current), 1);
  return multiplyAll;
};

const factorial = function(highestNum) {
	let newArray = [];
  for (let i = 1; i <= highestNum; i++) {
    newArray.push(i);
  }
  let multiplyAll = newArray.reduce(((acc, current) => acc * current), 1);
  return multiplyAll;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
