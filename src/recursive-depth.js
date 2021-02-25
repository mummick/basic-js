const CustomError = require('../extensions/custom-error');

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    } else if (arr.length == 0) {
      return 1;
    } else {
      let maxDeep = 0;
      let depth;
      for (let sub of arr) {
        if ((depth = this.calculateDepth(sub)) > maxDeep) {
          maxDeep = depth;
        }
      }
      return maxDeep + 1;
    }
  }
};
