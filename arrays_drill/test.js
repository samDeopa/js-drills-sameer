const { map, reduce, find, filter, flatten, each } = require("./arrays");

const items = [1, 2, 3, 4, 5, 5];
const nestedArray = [1, [2], [[3]], [[[4]]]];

// Test 'each'
console.log("Testing each:");
each(items, (ele, index) => console.log(`Index: ${index}, Element: ${ele}`));

// Test 'map'
console.log("\nTesting map:");
console.log(map(items, (ele) => ele * 2)); // Expected: [2, 4, 6, 8, 10, 10]

// Test 'reduce'
console.log("\nTesting reduce:");
console.log(reduce(items, (acc, curr) => acc + curr, 0)); // Expected: 20

// Test 'find'
console.log("\nTesting find:");
console.log(find(items, (ele) => ele > 3)); // Expected: 4
console.log(find(items, (ele) => ele > 10)); // Expected: undefined

// Test 'filter'
console.log("\nTesting filter:");
console.log(filter(items, (ele) => ele % 2 === 0)); // Expected: [2, 4]

// Test 'flatten'
console.log("\nTesting flatten:");
console.log(flatten(nestedArray)); // Expected: [1, 2, 3, 4]

// Edge Cases
console.log("\nEdge Case Testing:");

// Empty array
console.log(reduce([], (acc, curr) => acc + curr, 0)); // Expected: 0
console.log(find([], (ele) => ele > 3)); // Expected: undefined
console.log(filter([], (ele) => ele > 3)); // Expected: []
console.log(flatten([])); // Expected: []

// No starting value for reduce
console.log(reduce([5, 10, 15], (acc, curr) => acc + curr)); // Expected: 30 (5 + 10 + 15)

// Nested array with deeper levels
console.log(flatten([1, [2, [3, [4, [5]]]]])); // Expected: [1, 2, 3, 4, 5]
