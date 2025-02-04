const {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
} = require("./objects");

const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };

// Edge Cases for keys()
console.log(keys({}));
// Expected Output: [] (Empty Object)

console.log(keys({ a: 1, b: 2, c: 3 }));
// Expected Output: [ 'a', 'b', 'c' ]

// Edge Cases for values()
console.log(values({}));
// Expected Output: []

console.log(values({ a: null, b: undefined, c: false, d: 0 }));
// Expected Output: [ null, undefined, false, 0 ]

// Edge Cases for mapObject()
console.log(mapObject({}, (val) => val * 2));
// Expected Output: {} (Empty Object)

console.log(mapObject({ x: 10, y: -5, z: 0 }, (val) => val * 3));
// Expected Output: { x: 30, y: -15, z: 0 }

// Edge Cases for pairs()
console.log(pairs({}));
// Expected Output: []

console.log(pairs({ singleKey: "value" }));
// Expected Output: [ ['singleKey', 'value'] ]

// Edge Cases for invert()
console.log(invert({}));
// Expected Output: {}

console.log(invert({ a: "x", b: "y", c: "z" }));
// Expected Output: { x: 'a', y: 'b', z: 'c' }

// Edge Cases for defaults()
const testObj2 = { name: undefined, age: 40 };
console.log(
  defaults(testObj2, { name: "Batman", location: "Gotham", age: 50 })
);
// Expected Output: { name: 'Batman', age: 40, location: 'Gotham' }

console.log(
  defaults(
    { a: 0, b: false, c: null },
    { a: 10, b: true, c: "default", d: "extra" }
  )
);
// Expected Output: { a: 0, b: false, c: "default", d: "extra" }  (Only `null` and `undefined` are replaced)

console.log(defaults({}, { key: "value" }));
// Expected Output: { key: 'value' }
