// Question No 36: T-Shirt: Write a function called make_shirt() that accepts a size and the 
// text of a message that should be printed on the shirt. The function should print a sentence
//  summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log("The shirt size is ".concat(size, " and it has the message: \"").concat(message, "\" printed on it."));
}
// Call the function with different arguments
make_shirt("Medium", "Code is life!");
make_shirt("Large", "Keep calm and code on");
make_shirt("Small", "Eat, Sleep, Code, Repeat");
// Print:
// The shirt size is Medium and it has the message: "Code is life!" printed on it.
// The shirt size is Large and it has the message: "Keep calm and code on" printed on it.
// The shirt size is Small and it has the message: "Eat, Sleep, Code, Repeat" printed on it
