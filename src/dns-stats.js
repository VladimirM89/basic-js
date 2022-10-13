const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.',
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
  let reverseArr = [];
  let counter = 0;

  domains.forEach(item => {
    let tempArr = item.split('.')
    console.log(tempArr.reverse().join('.'))
    reverseArr.push(tempArr)
  })

  return resultObject;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
getDNSStats
};

