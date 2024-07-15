// Question No 32: Checking Usernames: Do the following to create a program that simulates how websites
//  ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also 
// in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a
//  message that the person will need to enter a new username. If a username has not been used, print a message
//   saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// let current_users: string[] = ["Hassan", "Raza", "Ali", "Anas", "Fayaz"];

// let new_users: string[] = ["Hassan", "Raza", "Mushtaq", "Saqib", "Ahmad","Anas"];
 
// new_users.forEach(new_user =>{
//     // now we will apply conditions
//     if (userNameTaken){ 
//         console.log(`$(new_user) needs to choose a new username because it's already taken`);
//     }else{
//     console.log('${new_user} is the new member added');
//     current_users.push(new_user) // add new user to current users

//     }
//     });
//     console.log(current_users);


let current_users: string[] = ["Hassan", "Raza", "Ali", "Anas", "Fayaz"];
let new_users: string[] = ["Hassan", "Raza", "Mushtaq", "Saqib", "Ahmad", "Anas"];

// Convert current users to lowercase for case insensitive comparison
let current_users_lowercase: string[] = current_users.map(user => user.toLowerCase());

new_users.forEach(new_user => {
    // Convert new_user to lowercase
    let new_user_lowercase = new_user.toLowerCase();

    // Check if the new username is already in the list of current users
    if (current_users_lowercase.includes(new_user_lowercase)) {
        console.log(`${new_user} needs to choose a new username because it's already taken`);
    } else {
        console.log(`${new_user} is the new member added`);
        // Add new user to current users and update the lowercase list
        current_users.push(new_user);
        current_users_lowercase.push(new_user_lowercase);
    }
});

console.log(current_users);





