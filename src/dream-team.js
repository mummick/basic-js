const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  return members
    .filter(
      (member) => typeof member == 'string' && member.trimLeft().length > 0
    )
    .map((member) => member.trimLeft()[0].toUpperCase())
    .sort()
    .join('');
};
