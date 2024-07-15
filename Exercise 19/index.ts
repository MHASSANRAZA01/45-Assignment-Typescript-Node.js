//Question No 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//  print a message indicating the number of people you are inviting to dinner.

let dinner: string[] = ["Ali", "Hassan", "Ahmad", "Raza", "Saqib",];

console.log(`I am inviting ${dinner.length} Friend to my Dinner whach are Following\n`);

for (let i = 0; i < dinner.length; i++) {
        console.log(` ${i + 1}. ${dinner[i]}`)
}

// Print:
// I am inviting 5 Friend to my Dinner whach are Following

//  1. Ali   
//  2. Hassan
//  3. Ahmad 
//  4. Raza  
//  5. Saqib

