// Question No 30: Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//  Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//  Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a 
// status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


let usernames: string[] = ["Anas", "Ali", "Raza", "Umar", "Saqib", "Admin",];

for(let i = 0 ; i < usernames.length; i++){
if(usernames[i] == "Admin"){
    console.log(`\n Hello ${usernames[i]} World you To see a state report?`)

}else
console.log(`Hello ${usernames[i]} Thank you for loggin in again!`)
}

// Print:
// Hello Anas Thank you for loggin in again!
// Hello Ali Thank you for loggin in again!
// Hello Raza Thank you for loggin in again!
// Hello Umar Thank you for loggin in again!
// Hello Saqib Thank you for loggin in again!

//  Hello Admin World you To see a state report?
