//  Question No 45: Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. It should then accept an 
// arbitrary number of keyword arguments. Call the function with the required information and two 
// other name-value pairs, such as a color or an optional feature. Print the Object that’s returned 
// to make sure all the information was stored correctly.


type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any;
};

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
    let car: Car = { manufacturer, model };
    options.forEach(option => {
        car[option[0]] = option[1];
    });
    return car;
}

// Calling the function with required information and two other name-value pairs
let car1 = createCar('Toyota', 'Corolla', ['color', 'blue'], ['sunroof', true]);
let car2 = createCar('Tesla', 'Model S', ['color', 'red'], ['autopilot', true], ['battery', '100 kWh']);

// Printing the object to make sure all the information was stored correctly
console.log(car1);
console.log(car2);


// Print:
// {
//     manufacturer: 'Toyota',
//     model: 'Corolla',
//     color: 'blue',
//     sunroof: true
//   }
//   {
//     manufacturer: 'Tesla',
//     model: 'Model S',
//     color: 'red',
//     autopilot: true,
//     battery: '100 kWh'
//   }