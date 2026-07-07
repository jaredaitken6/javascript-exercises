const reverseString = function(string) {
    let stringArray = string.split('');
    let reversedStringArray = [];

    for (const stringValue of stringArray) {
    reversedStringArray.unshift(stringValue);
    }

    reversedStringArray = reversedStringArray.join('');

    return reversedStringArray; 
};

// Do not edit below this line
module.exports = reverseString;
