const CustomError = require('../extensions/custom-error');

const chainMaker = {
  elements: [],
  getLength() {
    return this.elements.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = '';
    }
    this.elements.push(value);
    return this;
  },
  removeLink(position) {
    if (
      typeof position != 'number' ||
      Math.round(position) != position ||
      position < 1 ||
      position > this.elements.length
    ) {
      this.elements = [];
      throw new Error();
    }
    this.elements.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.elements.reverse();
    return this;
  },
  finishChain() {
    resultString = '';
    for (let element of this.elements) {
      resultString += `( ${element} )~~`;
    }
    if (resultString != '') {
      resultString = resultString.slice(0, -2);
    }
    this.elements = [];
    return resultString;
  },
};

module.exports = chainMaker;
