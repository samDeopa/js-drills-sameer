// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
// Check and use MDN as well
// PROJECT RESTRICTION: You can't use the built in Object methods.  Only use native JavaScript for loops. No other types of loops are allowed.
// PROJECT RESTRICTION: You can't use the underscore library or any other external library.

function keys(obj) {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  let ObjectKeys = [];
  for (let key in obj) {
    ObjectKeys.push(key);
  }
  return ObjectKeys;
}

function values(obj) {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const objectValues = [];
  const objectKeys = keys(obj);
  for (let key of objectKeys) {
    objectValues.push(obj[key]);
  }
  return objectValues;
}

function mapObject(obj, cb) {
  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject
  const result = {};
  const objectKeys = keys(obj);
  for (let key of objectKeys) {
    let value = cb(obj[key]);
    result[key] = value;
  }
  return result;
}

function pairs(obj) {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const objectPairs = [];
  const objectKeys = keys(obj);
  for (let key of objectKeys) {
    objectPairs.push([key, obj[key]]);
  }
  return objectPairs;
}

/* STRETCH PROBLEMS */

function invert(obj) {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const invertedObject = {};
  const objectKeys = keys(obj);
  for (let key of objectKeys) {
    invertedObject[obj[key]] = key;
  }
  return invertedObject;
}
function defaults(obj, defaultProps) {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const defaultPropsKeys = keys(defaultProps);
  for (key of defaultPropsKeys) {
    if (obj[key] === undefined) {
      obj[key] = defaultProps[key];
    }
  }
  return obj;
}

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
};
