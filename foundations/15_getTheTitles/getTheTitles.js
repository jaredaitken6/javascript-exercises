const getTheTitles = function(books) {

  const bookTitles = books.reduce((acc, currentBook) => {
    acc.push(currentBook.title);
    return acc;
  }, []);

  return bookTitles;

};


// Do not edit below this line
module.exports = getTheTitles;
