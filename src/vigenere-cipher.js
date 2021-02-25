const CustomError = require('../extensions/custom-error');

class VigenereCipheringMachine {
  constructor(isDirect) {
    if (isDirect === undefined) {
      this.isDirect = true;
    } else {
      this.isDirect = isDirect;
    }
  }

  machine(str, key, func) {
    if (str === undefined || key === undefined) {
      throw new Error();
    }

    const aCode = 'A'.charCodeAt(0);
    const zCode = 'Z'.charCodeAt(0);
    const alphabetLength = zCode - aCode + 1;
    let strCode = str
      .toUpperCase()
      .split('')
      .map((char) => char.charCodeAt(0));
    let keyCode = key
      .toUpperCase()
      .split('')
      .map((char) => char.charCodeAt(0) - aCode);
    let strLength = strCode.length;
    let keyLength = keyCode.length;
    let keyIndex = 0;
    let result = [];

    for (let charCode of strCode) {
      if (aCode <= charCode && charCode <= zCode) {
        result.push(func(aCode, charCode, keyCode[keyIndex], alphabetLength));
        keyIndex++;
        keyIndex = keyIndex % keyLength;
      } else {
        result.push(charCode);
      }
    }
    if (!this.isDirect) {
      result.reverse();
    }
    return result.map((charCode) => String.fromCharCode(charCode)).join('');
  }

  encrypt(str, key) {
    return this.machine(
      str,
      key,
      (aCode, charCode, keyCode, alphabetLength) =>
        aCode + ((charCode - aCode + keyCode) % alphabetLength)
    );
  }
  decrypt(str, key) {
    return this.machine(
      str,
      key,
      (aCode, charCode, keyCode, alphabetLength) =>
        aCode + ((charCode - aCode + alphabetLength - keyCode) % alphabetLength)
    );
  }
}

module.exports = VigenereCipheringMachine;
