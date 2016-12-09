/*
 * Keyson is a simple accessor function for
 * nested json objects using simple path syntax as a key.
 *
 * License MIT
 *  (c) Svetlana Linuxenko
 */

/**
 * Keyson function
 *
 * @name keyson
 * @function
 * @access public
 * @param {Object} obj object to get reference from
 * @param {String} key path to the nested object
 * @param {String} separator key path separator (default: .)
 * @returns {ref} Nested object value or reference
 */
var keyson = function(obj, key, separator) {
  separator = separator || '.';

  var keys = key.split(separator);
  var ref = obj;

  for (var i = 0; i < keys.length; i++) {
    if ((ref = resolve(ref, keys[i])) === undefined) {
      return undefined;
    }
  }

  return ref;
};

var resolve = function(obj, key) {
  if (typeof obj === 'object' && key in obj) {
    return obj[key];
  }
};

module.exports = keyson;
