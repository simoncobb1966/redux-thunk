import isNullOrUndefined from './isNullOrUndefined';

/**
 * Returns whether a value matches the following criteria for empty:
 *   - undefined
 *   - null
 *   - object with no enumerable properties
 *   - array with no members
 *   - zero-length string
 *   - whitespace only string
 *   - zero-value number
 *   - boolean false
 *
 * @param {*} mixedData Data to check for emptiness
 * @returns {bool} Is the data empty?
 */
const isEmpty=(mixedData) => {
  // Data is empty if null or undefined
  if (true === isNullOrUndefined(mixedData)) {
    return true;
  }

  // If data is a number, then empty if 0
  if ('number' === typeof mixedData) {
    return 0 === mixedData;
  }

  // If data boolean, then empty if false
  if ('boolean' === typeof mixedData) {
    return false === mixedData;
  }

  if ('string' === typeof mixedData) {
    return 0 === mixedData.length || !mixedData.trim();
  }

  // If data has some length, eg. a string or array, then empty if has no
  // elements
  if ('undefined' !== typeof mixedData.length) {
    return 0 === mixedData.length;
  }

  // If data hasa name property not empty then it's not empty
  // (added for files)
  if ('string' === typeof mixedData.name && '' !== mixedData.name) {
    return false;
  }

  /* eslint-disable no-restricted-syntax */
  // If data has an enumerable property, then it's not empty
  for (const i in mixedData) {
    if (Object.prototype.hasOwnProperty.call(mixedData, i)) {
      return false;
    }
  }
  /* eslint-enable no-restricted-syntax */

  return true;
};

export default isEmpty;
