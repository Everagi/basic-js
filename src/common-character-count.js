const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr = s1.split("");
  let count = 0;
  for (const value of s2) {
    if (arr.includes(value)) {
      arr.splice(arr.indexOf(value), 1);
      count++;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
