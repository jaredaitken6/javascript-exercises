const removeFromArray = function(array, remove) {

    let removeArray = [];
    let noDuplicateNumbers = [];

    // turn arguments array into actual array
    for (let i = 0; i < arguments.length; i++) {
        if (i === 0) {
            continue;
        } else {
            removeArray.push(arguments[i]);
        }
    }

    // push value to noDuplicateNumbers array only if array value includes removeArray value
    for (let i = 0; i < array.length; i++) {

        if (!removeArray.includes(array[i])) {
            noDuplicateNumbers.push(array[i]);
        }

    }

    return noDuplicateNumbers;

};

// Do not edit below this line
module.exports = removeFromArray;
