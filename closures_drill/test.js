const {
  counterFactory,
  limitFunctionCallCount,
  cacheFunction,
} = require("./closure");

// Test counterFactory
console.log("Testing counterFactory:");
const counter = counterFactory();
console.log(counter.increment()); // Expected: 1
console.log(counter.increment()); // Expected: 2
console.log(counter.decrement()); // Expected: 1
console.log(counter.decrement()); // Expected: 0
console.log(counter.decrement()); // Expected: -1

// Test limitFunctionCallCount
console.log("\nTesting limitFunctionCallCount:");
const limitedFn = limitFunctionCallCount((x) => x * 2, 3);
console.log(limitedFn(2)); // Expected: 4
console.log(limitedFn(3)); // Expected: 6
console.log(limitedFn(4)); // Expected: 8
console.log(limitedFn(5)); // Expected: undefined (or log message: Call count exceeded!)

// Test cacheFunction
console.log("\nTesting cacheFunction:");
const cachedFn = cacheFunction((x) => x * 2);
console.log(cachedFn(2)); // Expected: 4 (Caching happens)
console.log(cachedFn(3)); // Expected: 6 (Caching happens)
console.log(cachedFn(2)); // Expected: 4 (from cache)
console.log(cachedFn(3)); // Expected: 6 (from cache)
console.log(cachedFn(5)); // Expected: 10 (Caching happens)

// Edge Cases
console.log("\nEdge Case Testing:");

// limitFunctionCallCount with 0 calls allowed
const limitedZero = limitFunctionCallCount(() => "Hello", 0);
console.log(limitedZero()); // Expected: undefined (Call count exceeded!)

// cacheFunction with multiple arguments
const cachedMultiArg = cacheFunction((a, b) => a + b);
console.log(cachedMultiArg(2, 3)); // Expected: 5 (Caching happens)
console.log(cachedMultiArg(2, 3)); // Expected: 5 (from cache)
console.log(cachedMultiArg(3, 2)); // Expected: 5 (Caching happens, since keys are different)
