const sumAll = function(num1, num2) {
    let lowestNum;
    let highestNum;
    let fullNumList = [];
    let sum;
// validate that numbers are positive
// organize them to lowest/highest
    if (Number.isInteger(num1) && Number.isInteger(num2) && num1 > 0 && num2 > 0) {
        if (num1 > num2) {
        highestNum = num1;
        lowestNum = num2;
        } else {
        lowestNum = num1;
        highestNum = num2;
        }
// create number list
    for (let i = lowestNum; i <= highestNum; i++) {
        fullNumList.push(i);
    }

// add number list
    sum = fullNumList.reduce((acc, curr) => acc + curr, 0);

    return sum;
    
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
