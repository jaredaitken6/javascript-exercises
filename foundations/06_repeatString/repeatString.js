const repeatString = function(string, num) {
    let repeatWordArray = [];

    if (num < 0) {
        return 'ERROR';
    }

     for (let i = 0; i < num; i++) {
        repeatWordArray.push(string);
     }

     let joinRepeatArray = repeatWordArray.join('');

     return joinRepeatArray;
};

// repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
