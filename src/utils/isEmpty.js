import isNullOrUndefined from "./isNullOrUndefined";

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
 * @param {*} value Data to check for emptiness
 * @returns {bool} Is the data empty?
 */
const isEmpty = (value) => {
  // Data is empty if null or undefined
  if (true === isNullOrUndefined(value)) {
    return true;
  }

  // If data is a number, then empty if 0
  if ("number" === typeof value) {
    return 0 === value;
  }

  // If data boolean, then empty if false
  if ("boolean" === typeof value) {
    return false === value;
  }

  if ("string" === typeof value) {
    return 0 === value.length || !value.trim();
  }

  // If data has some length, eg. a string or array, then empty if has no
  // elements
  if ("undefined" !== typeof value.length) {
    return 0 === value.length;
  }

  // If data hasa name property not empty then it's not empty
  // (added for files)
  if ("string" === typeof value.name && "" !== value.name) {
    return false;
  }

  // If data has an enumerable property, then it's not empty
  for (const i in value) {
    if (Object.prototype.hasOwnProperty.call(value, i)) {
      return false;
    }
  }

  return true;
};

export default isEmpty;
