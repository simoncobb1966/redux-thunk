/**
 * @param {*} value Value to check
 * @returns {bool} Is value null or undefined
 */
// export default isNullOrUndefined = (mixedValue) => undefined === mixedValue || null === mixedValue;

const isNullOrUndefined = (value) => undefined === value || null === value;
export default isNullOrUndefined;
