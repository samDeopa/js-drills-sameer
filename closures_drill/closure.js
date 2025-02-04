function counterFactory() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  const counter = {
    increment: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
  };
  return counter;
}

// const counter = counterFactory();
// console.log(
//   counter.increment(),
//   counter.decrement(),
//   counter.decrement(),
//   counter.decrement()
// );

function limitFunctionCallCount(cb, n) {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned
  let callCount = 0;

  const callingFunction = (...arg) => {
    console.log(arg);
    callCount++;
    if (callCount <= n) {
      return cb(...arg);
    }
    console.log(`Call count exceeded by ${callCount - n}!`);
  };
  return callingFunction;
}

function cacheFunction(cb) {
  // Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  let cache = {};

  const callingFunction = (...arg) => {
    if (!cache[arg]) {
      const res = cb(...arg);
      console.log("Caching");
      cache[arg] = res;
    }
    return cache[arg];
  };
  return callingFunction;
}

module.exports = { counterFactory, limitFunctionCallCount, cacheFunction };
