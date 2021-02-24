const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || date.hasOwnProperty('getMonth')) {
    throw new Error();
  }
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  return seasons[Math.floor(((date.getMonth() + 1) % 12) / 3)];
};
