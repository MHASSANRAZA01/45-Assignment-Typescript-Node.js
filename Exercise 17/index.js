// Question No 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive 
// in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you 
// can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you
//  pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
// invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you
//  actually have an empty list at the end of your program.
var invitation = ["Ali", "Hassan", "Raza", "Mushtaq", "Saqib"];
console.log("Table is Not Available I Can Invite only 2 persons");
var friends = invitation.pop();
console.log(" Sorry MR ".concat(friends, " You Are Not Invited"));
var friends1 = invitation.pop();
console.log(" Sorry MR ".concat(friends1, " You Are Not Invited"));
var friends2 = invitation.pop();
console.log(" Sorry MR ".concat(friends2, " You Are Not Invited\n"));
for (var i = 0; i < invitation.length; i++) {
    console.log("MR ".concat(invitation, " you are still invited"));
}
invitation.pop();
invitation.pop();
console.log(invitation);
