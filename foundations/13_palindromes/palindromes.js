const palindromes = function (string) {
  let stringToArray = string.split('');
  let lowerCaseArrayReversed = [];
  let lowerCaseArray = [];
  const alphanumericArray = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', ','
  ];
  let commasArray = [];
  let spacesArray = [];
  let spacesCount = 0;
  let commasCount = 0;

// removes everything but letters, numbers, spaces and commas
  for (let i = 0; i < stringToArray.length; i++) {
     if (!alphanumericArray.includes(stringToArray[i])) {
      stringToArray.splice(i, 1);
    }

  }

  for (let i = 0; i < stringToArray.length; i++) {
     lowerCaseArray.push(stringToArray[i].toLowerCase());
  }

  for (let i = 0; i < lowerCaseArray.length; i++) {
     lowerCaseArrayReversed.unshift(lowerCaseArray[i]);
  }


  for (let i = 0; i < lowerCaseArray.length; i++) {
    if (lowerCaseArray[i] === ',') {
      commasArray.push(i);
    }
    if (lowerCaseArray[i] === ' ') {
      spacesArray.push(i);
    }

}

  for (let i = 0; i < lowerCaseArrayReversed.length; i++) {
    if (lowerCaseArrayReversed[i] === ',') {
      lowerCaseArrayReversed.splice(i, 1);
    }  
}

  for (let i = 0; i < lowerCaseArrayReversed.length; i++) {
      if (lowerCaseArrayReversed[i] === ' ') {
            lowerCaseArrayReversed.splice(i, 1);
          }
  }



for (let i = 0; i < lowerCaseArray.length; i++) {

    if (lowerCaseArray[i] === ',') {



                let removedEnd = lowerCaseArrayReversed.splice(commasArray[commasCount], lowerCaseArrayReversed.length - 1);
              lowerCaseArrayReversed.push(',');
              lowerCaseArrayReversed = [...lowerCaseArrayReversed, ...removedEnd];
              commasCount++;

    }



    if (lowerCaseArray[i] === ' ') {

          // inserting spaces         
              let removedEnd = lowerCaseArrayReversed.splice(spacesArray[spacesCount], lowerCaseArrayReversed.length - 1);
              lowerCaseArrayReversed.push(' ');
              lowerCaseArrayReversed = [...lowerCaseArrayReversed, ...removedEnd];

              spacesCount++;

    }

}

let normalWord = lowerCaseArray.join('');
let reverseWord = lowerCaseArrayReversed.join('');

if (normalWord === reverseWord) {
  return true;
} else {
  return false;
}

};


// Do not edit below this line
module.exports = palindromes;
