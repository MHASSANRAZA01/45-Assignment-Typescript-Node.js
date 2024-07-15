// Question No 3: Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.
var personName1 = "saqib";
//lowercase
console.log(personName.toLowerCase());
//uppercase
console.log(personName.toUpperCase());
//titlecase
var firstName1 = personName.charAt(0).toUpperCase();
var restLatter1 = personName.slice(1).toLowerCase();
var titleCase1 = firstName + restLatter;
console.log(titleCase);
//print:
//saqib
//SAQIB
//Saqib
