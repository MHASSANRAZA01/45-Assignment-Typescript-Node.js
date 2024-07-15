// Question No 37: Large Shirts: Modify the make_shirt() function so that shirts are large by 
// default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with 
// the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and it has the message: \"").concat(message, "\" printed on it."));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Keep calm and code on");
// Print:
// The shirt size is Large and it has the message: "I love TypeScript" printed on it.
// The shirt size is Medium and it has the message: "I love TypeScript" printed on it.
// The shirt size is Small and it has the message: "Keep calm and code on" printed on it.
