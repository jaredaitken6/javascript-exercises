const convertToCelsius = function(fah) {
  fah = (fah - 32) * 5 / 9;
  return Number(fah.toFixed(1));

};

const convertToFahrenheit = function(cel) {

  cel = (cel * 1.8) + 32;
  return Number(cel.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
