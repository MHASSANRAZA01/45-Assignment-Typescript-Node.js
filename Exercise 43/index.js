//  Questiobn No 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function 
// make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged,
//  return the new array and store it in a separate array. Call show_magicians() with each array to show 
//  that you have one array of the original names and one array with the Great added to each magician’s 
//  name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    var greatMagicians = magicians.map(function (magician) { return 'the Great ' + magician; });
    return greatMagicians;
}
// Array of magician's names
var magicians = ["Ali", "Hassan", "Raza", "Mushtaq", "Ahmad"];
// Creating a copy of the array and modifying it
var greatMagicians = makeGreat(__spreadArray([], magicians, true));
// Showing the original array
console.log("Original magicians:");
showMagicians(magicians);
// Showing the modified array
console.log("\nGreat magicians:");
showMagicians(greatMagicians);
// Print:
// Original magicians:
// Ali    
// Hassan 
// Raza   
// Mushtaq
// Ahmad  
// Great magicians:
// the Great Ali
// the Great Hassan
// the Great Raza
// the Great Mushtaq
// the Great Ahmad
