// Question No 31: No Users: Add an if test to Exercise 28 to make sure the list of usersis not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.


 let usernames: string[] = ["Anas", "Ali", "Raza", "Umar", "Saqib", "Admin",];

 if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
     for (let username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

 usernames = [];

 if (usernames.length === 0) {
    console.log("We need to find some users!");
}

// Print:
// Hello Anas, thank you for logging in again.
// Hello Ali, thank you for logging in again.
// Hello Raza, thank you for logging in again.
// Hello Umar, thank you for logging in again.
// Hello Saqib, thank you for logging in again.
// Hello Admin, thank you for logging in again.
// We need to find some users!