//  Questiobn No 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function 
// make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged,
//  return the new array and store it in a separate array. Call show_magicians() with each array to show 
//  that you have one array of the original names and one array with the Great added to each magician’s 
//  name.



 
function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function makeGreat(magicians: string[]): string[] {
    let greatMagicians = magicians.map(magician => 'the Great ' + magician);
    return greatMagicians;
}

// Array of magician's names
let magicians: string[] = ["Ali", "Hassan", "Raza", "Mushtaq", "Ahmad"];

// Creating a copy of the array and modifying it
let greatMagicians = makeGreat([...magicians]);

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
