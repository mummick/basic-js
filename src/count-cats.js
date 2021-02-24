const CustomError = require('../extensions/custom-error');

module.exports = function countCats(backyard) {
  let counter = 0;
  for (let subBackYard of backyard) {
    for (let element of subBackYard) {
      if (element === '^^') {
        counter++;
      }
    }
  }
  return counter;
};
