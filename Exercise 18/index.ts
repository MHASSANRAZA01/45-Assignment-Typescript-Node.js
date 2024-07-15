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


let places: string[] = ["Dubai", "Sudia Arab", "Qatter", "America", "Europe",];
console.log(places);

console.log("Original order:");
console.log(places);

let sortedPlaces = [...places].sort();
console.log("\nAlphabetical order:");
console.log(sortedPlaces);

console.log("\nStill in original order:");
console.log(places);

let reverseSortedPlaces = [...places].sort().reverse();
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


//Print:
 
// [ 'Dubai', 'Sudia Arab', 'Qatter', 'America', 'Europe' ]
// Original order:
// [ 'Dubai', 'Sudia Arab', 'Qatter', 'America', 'Europe' ]

// Alphabetical order:
// [ 'America', 'Dubai', 'Europe', 'Qatter', 'Sudia Arab' ]

// Still in original order:
// [ 'Dubai', 'Sudia Arab', 'Qatter', 'America', 'Europe' ]

// Reverse alphabetical order:
// [ 'Sudia Arab', 'Qatter', 'Europe', 'Dubai', 'America' ]

// Still in original order:
// [ 'Dubai', 'Sudia Arab', 'Qatter', 'America', 'Europe' ]

// Reversed order:
// [ 'Europe', 'America', 'Qatter', 'Sudia Arab', 'Dubai' ]

// Back to original order:
// [ 'Dubai', 'Sudia Arab', 'Qatter', 'America', 'Europe' ]

// Alphabetical order:
// [ 'America', 'Dubai', 'Europe', 'Qatter', 'Sudia Arab' ]

// Reverse alphabetical order:
// [ 'Sudia Arab', 'Qatter', 'Europe', 'Dubai', 'America' ]