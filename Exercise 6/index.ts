//Question No 6: Stripping Names: Store a person’s name, and include some whitespace characters 
//at the beginning and end of the name. Make sure you use each character combination,
//"\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
//Then print the name after striping the white spaces.



const personName: string = "\t Bill Gates \n";
console.log(personName);

const personName1: string = personName.trim();
console.log(personName1)

//Print:
        //Bill Gates 

//Bill Gates