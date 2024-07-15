//  Question No 41: Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.


let Magiciansnames: string[] = ["Ali", "Hassan", "Raza", "Mushtaq", "Ahmad"];

function show_magicians(){
    for(let Magiciansname of Magiciansnames){
        console.log(Magiciansname)

    }
};

show_magicians()

// Print:
// Ali
// Hassan
// Raza
// Mushtaq
// Ahmad
