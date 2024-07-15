// Question No 16: More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing
//  people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of 
// your list. • Print a new set of invitation messages, one for each person in your list.


let invitation: string[] = ["Ali", "Hassan", "Raza", "Mushtaq", "Saqib"];

console.log(`we have 3 more feriend to invited a dinner night\n`);

invitation.unshift("Muhammad")
console.log(invitation)
//[ 'Muhammad', 'Ali', 'Hassan', 'Raza', 'Mushtaq', 'Saqib' ]
invitation.splice(3, 0, "Ali Raza");
console.log(invitation)
//['Muhammad', 'Ali','Hassan','Ali Raza','Raza','Mushtaq','Saqib']
invitation.push("Humza");
console.log(invitation);
//['Muhammad', 'Ali','Hassan',   'Ali Raza','Raza',     'Mushtaq','Saqib',    'Humza']

for(let i = 0; i < invitation.length; i++){
    console.log(`Mr ${invitation[i]}, you are invited to my dinner.`);
}

// Print:
// Mr Muhammad, you are invited to my dinner.
// Mr Ali, you are invited to my dinner.
// Mr Hassan, you are invited to my dinner.
// Mr Ali Raza, you are invited to my dinner.
// Mr Raza, you are invited to my dinner.
// Mr Mushtaq, you are invited to my dinner.
// Mr Saqib, you are invited to my dinner.
// Mr Humza, you are invited to my dinner.
 



 