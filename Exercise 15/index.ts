// Question No 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating
//  the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
// you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.





let invitation: string[] = ["Ali", "Hassan", "Raza", "Mushtaq", "Saqib"];

console.log(`do to some personal reasons Mr. ${invitation[1]} will note come my dinner`);
invitation[1] = "Ahmad";
console.log(`new list of my friends how are coming to my dinner `)

for(let i = 0 ; i < invitation.length; i++){
    console.log(` ${i + 1}, ${invitation[i]}`);
}


// Print:
// new list of my friends how are coming to my dinner 
//  1, Ali
//  2, Ahmad
//  3, Raza
//  4, Mushtaq
//  5, Saqib