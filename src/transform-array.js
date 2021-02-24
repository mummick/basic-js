const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let destArray = [];
  let sourceIndex = 0;
  let sourceArrayLength = arr.length;
  function Discard() {}

  while (sourceIndex < sourceArrayLength) {
    switch (arr[sourceIndex]) {
      case '--discard-next':
        sourceIndex++;
        destArray.push(new Discard());
        break;
      case '--discard-prev':
        destArray.pop();
        break;
      case '--double-next':
        if (sourceIndex + 1 < sourceArrayLength) {
          sourceIndex++;
          destArray.push(arr[sourceIndex], arr[sourceIndex]);
        }
        break;
      case '--double-prev':
        if (destArray.length > 0) {
          destArray.push(destArray[destArray.length - 1]);
        }
        break;
      default:
        destArray.push(arr[sourceIndex]);
    }
    sourceIndex++;
  }

  return destArray.filter((item) => !(item instanceof Discard));
};
