//Question No 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//  print a message indicating the number of people you are inviting to dinner.
var dinner = ["Ali", "Hassan", "Ahmad", "Raza", "Saqib",];
console.log("I am inviting ".concat(dinner.length, " Friend to my Dinner whach are Following\n"));
for (var i = 0; i < dinner.length; i++) {
    console.log(" ".concat(i + 1, ". ").concat(dinner[i]));
}
// Print:
// I am inviting 5 Friend to my Dinner whach are Following
//  1. Ali   
//  2. Hassan
//  3. Ahmad 
//  4. Raza  
//  5. Saqib
