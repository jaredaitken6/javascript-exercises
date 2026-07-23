const fibonacci = function(indexNum) {
    let fiboArray = [0, 1];
    indexNum = Number(indexNum);

    if (indexNum < 0) {
        return 'OOPS';
    } else {

    for (let i = 0; i < indexNum - 1; i++) {
        fiboArray.push((fiboArray[fiboArray.length - 1]) + (fiboArray[fiboArray.length - 2]));
    }

    return fiboArray[indexNum];
    
    }
};

// Do not edit below this line
module.exports = fibonacci;
