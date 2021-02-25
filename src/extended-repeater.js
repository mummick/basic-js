const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  str = String(str);
  if (options === undefined) {
    return str;
  }

  let repeatTimes = options.repeatTimes;
  if (repeatTimes === undefined) {
    repeatTimes = 1;
  }
  let additionRepeatTimes = options.additionRepeatTimes;
  if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1;
  }
  let separator = options.separator;
  if (separator === undefined) {
    separator = '+';
  }
  let addition = options.addition;
  if (addition === undefined) {
    addition = '';
  } else {
    addition = String(addition);
  }
  let additionSeparator = options.additionSeparator;
  if (additionSeparator === undefined) {
    additionSeparator = '|';
  }

  let result = '';
  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition;
      if (j < additionRepeatTimes - 1) {
        result += additionSeparator;
      }
    }
    if (i < repeatTimes - 1) {
      result += separator;
    }
  }
  return result;
};
