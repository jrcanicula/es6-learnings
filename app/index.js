/*
  Notes : Coding Break: New ES6 Syntax

Hey! We made it to the end of another section. Nice work. We learned a lot in this one too. Now, go ahead and take an optional break. Grab some coffee, tea, gatorade, whatever you need!

While we have a moment though, let’s review the important topics we covered in this section:

Block scoping binds variable declarations to blocks of code, { .. }.

The let keyword replaces var in es6.

The const keyword declares a variable that cannot be re-assigned.

Template literals in es6 are strings with embedded variables or code inside. They have surrounding backticks `` with interpolated ${} symbols for variables.
*/


var a = 'hello';
var b = 'world po';
var c = a + ' ' + b;
console.log(c);


let d = `sample ${a}, ${c}`;

console.log(d);
