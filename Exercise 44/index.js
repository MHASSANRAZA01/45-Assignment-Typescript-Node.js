// Question No 44: Sandwiches: Write a function that accepts a array of items a person wants on 
// a sandwich. The function should have one parameter that collects as many items as the function call
//  provides, and it should print a summary of the sandwich that is being ordered. Call the function three 
//  times, using a different number of arguments each time.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:");
    items.forEach(function (item) {
        console.log("- ".concat(item));
    });
}
// Calling the function three times with different numbers of arguments
makeSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
makeSandwich('Turkey', 'Bacon', 'Avocado');
makeSandwich('Peanut Butter', 'Jelly');
// Print:
// Making a sandwich with the following items:
// - Ham
// - Cheese
// - Lettuce
// - Tomato
// Making a sandwich with the following items:
// - Turkey
// - Bacon
// - Avocado
// Making a sandwich with the following items:
// - Peanut Butter
// - Jelly
