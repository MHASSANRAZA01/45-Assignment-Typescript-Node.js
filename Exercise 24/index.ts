//Question No 24: More Conditional Tests: You don’t have to limit the number of tests you 
// create to 10. If you want to try more comparisons, write more tests. Have at least one True
//  and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or 
// equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


let myname = "Hassan";
console.log(myname == "Hassan");
console.log(myname!== "assan");

// Print:
// true
// true

let mynumber = 10
console.log(mynumber == 10);
console.log(mynumber!== 10);
console.log(mynumber > 5);
console.log(mynumber < 5);
console.log(mynumber <= 5);
console.log(mynumber >= 5);

// Print:
// true
// false
// true
// false
// false
// true


let number1 = 20;
let number2 = 10;
console.log( number1 > 18  && number2 < 10);
console.log(number1 > 18 || number2 < 10);

// Print:
// false
// true


let myArray = [5, 10, "Raza" ]
let myname1 = "Ahmad";
console.log(Array.isArray(myArray));
console.log(Array.isArray(myname1));

//Print :
// true
// false






