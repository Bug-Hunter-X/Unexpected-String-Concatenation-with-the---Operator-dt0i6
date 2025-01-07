function foo(a, b) {
  //Explicit type checking and conversion to numbers before using the + operator.
  a = Number(a);
  b = Number(b);
  if(isNaN(a) || isNaN(b)){
    return "Invalid input. Please provide numbers.";
  }
  return a + b; 
}
console.log(foo(1, "1")); // Output: 2
console.log(foo("a",1)); //Output: Invalid input. Please provide numbers.