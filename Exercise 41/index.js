//  Question No 41: Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.
var Magiciansnames = ["Ali", "Hassan", "Raza", "Mushtaq", "Ahmad"];
function show_magicians() {
    for (var _i = 0, Magiciansnames_1 = Magiciansnames; _i < Magiciansnames_1.length; _i++) {
        var Magiciansname = Magiciansnames_1[_i];
        console.log(Magiciansname);
    }
}
;
show_magicians();
// Print:
// Ali
// Hassan
// Raza
// Mushtaq
// Ahmad
