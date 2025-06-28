// Function that receives a callback and executes it
function receivesAFunction(callback) {
  callback();
}

// Function that returns a named function
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I am a named function!");
  };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    console.log("I am an anonymous function!");
  };
}

// Example usage:
receivesAFunction(() => console.log("Callback function executed!"));

const namedFn = returnsANamedFunction();
console.log(namedFn.name); // Output: "namedFunction"

const anonymousFn = returnsAnAnonymousFunction();
console.log(anonymousFn.name); // Output: "" (empty string, meaning it's anonymous)

