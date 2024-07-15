// Question No 3: Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.

let personName  : string = "saqib";

//lowercase
console.log(personName.toLowerCase());

//uppercase
console.log(personName.toUpperCase());

//titlecase
let firstName: string = personName.charAt(0).toUpperCase();
let restLatter: string = personName.slice(1).toLowerCase();
let titleCase = firstName + restLatter ;
console.log(titleCase);

//print:
//saqib
//SAQIB
//Saqib

