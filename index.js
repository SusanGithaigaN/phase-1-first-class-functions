//Receives a callback function as an argument and calls it.
function receivesAFunction(spy) {
  spy()
}
//Returns a named function.
function returnsANamedFunction() {
  return function myNamedFunction(string) {
    return "My Named Function";
  };
}
// Returns an anonymous function.
function returnsAnAnonymousFunction() {
  return function(){
    console.log("My Anonymous Function")
  };
}


