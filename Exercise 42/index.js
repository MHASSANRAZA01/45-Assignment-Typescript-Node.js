// Question No 42: Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the
// phrase the Great to each magician’s name. Call show_magicians() to see that the list has
// actually been modified.
var Magiciansnames = ["Ali", "Hassan", "Raza", "Mushtaq", "Ahmad"];
function show_magicians(greet) {
    for (var _i = 0, Magiciansnames_1 = Magiciansnames; _i < Magiciansnames_1.length; _i++) {
        var item = Magiciansnames_1[_i];
        console.log(greet, item);
    }
}
;
show_magicians("Hello, How are You MR");
show_magicians("Hello,"); //2nd Time Calling
// Print :
// Hello, How are You MR Ali
// Hello, How are You MR Hassan 
// Hello, How are You MR Raza   
// Hello, How are You MR Mushtaq
// Hello, How are You MR Ahmad  
// Hello, Ali
// Hello, Hassan
// Hello, Raza
// Hello, Mushtaq
// Hello, Ahmad
