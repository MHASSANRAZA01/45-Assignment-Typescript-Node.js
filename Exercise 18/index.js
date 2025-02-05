// //Question No 18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order
//  has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that 
// its order has changed.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Dubai", "Sudia Arab", "Qatter", "America", "Europe",];
console.log(places);
console.log("Original order:");
console.log(places);
var sortedPlaces = __spreadArray([], places, true).sort();
console.log("\nAlphabetical order:");
console.log(sortedPlaces);
console.log("\nStill in original order:");
console.log(places);
var reverseSortedPlaces = __spreadArray([], places, true).sort().reverse();
console.log("\nReverse alphabetical order:");
console.log(reverseSortedPlaces);
console.log("\nStill in original order:");
console.log(places);
places.reverse();
console.log("\nReversed order:");
console.log(places);
places.reverse();
console.log("\nBack to original order:");
console.log(places);
places.sort();
console.log("\nAlphabetical order:");
console.log(places);
places.sort().reverse();
console.log("\nReverse alphabetical order:");
console.log(places);
