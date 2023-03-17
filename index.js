// Function that receives a function
function receivesAFunction(callbackFunction) {
  callbackFunction();
}

// Function that returns a named function
const returnsANamedFunction = () => functionName;

function functionName () {};

// Function that returns an anonymous function
const returnsAnAnonymousFunction = () => function() {};
