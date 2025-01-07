# JavaScript Type Coercion Bug
This repository demonstrates a common JavaScript bug related to implicit type coercion with the + operator.  The `bug.js` file shows the problematic code, where adding a number and a string results in unexpected string concatenation.  The `bugSolution.js` provides a corrected version with explicit type checking and conversion. 

## Bug Description
JavaScript's flexible type system can lead to unexpected behavior if you're not careful.  The + operator will perform string concatenation if either operand is a string. This can result in incorrect calculations when you intend to perform numerical addition.

## Solution
The solution involves explicit type checking and conversion.  Always ensure that operands are numbers before performing numerical addition to avoid unintended string concatenation.

## How to reproduce
1. Clone the repository.
2. Run `node bug.js` to see the unexpected output.
3. Run `node bugSolution.js` to see the correct output.