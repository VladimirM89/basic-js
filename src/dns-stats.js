const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let resultObject = {};
  let indexDots = [];
  let counter = 0;

domains.sort((a,b) => b.length - a.length);
console.log(domains)
for (let i = 0; i < domains[0].length; i++) {
  if (domains[0][i].includes('.')) {
    indexDots.push(i);
    console.log(indexDots);
  }
}

let str1 = domains[0].slice(indexDots[indexDots.length-1])
console.log(str1)
let str2 = domains[0].slice(indexDots[indexDots.length-2], indexDots[indexDots.length-1])
console.log(str2)
let str3 = domains[0].slice(0, indexDots[indexDots.length-2])
console.log(str3)
  debugger;
  return resultObject;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
getDNSStats
};

