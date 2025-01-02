const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str
    .split("")
    .reduce((acc, curr) => {
      let lastElement = acc[acc.length - 1];

      if (lastElement && lastElement.character === curr) {
        lastElement.count++;
      } else {
        acc.push({ character: curr, count: 1 });
      }

      return acc;
    }, [])
    .map(({ character, count }) =>
      count > 1 ? `${count}${character}` : character
    )
    .join("");
}

module.exports = {
  encodeLine
};
