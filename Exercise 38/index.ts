// Question No 38: Cities: Write a function called describe_city() that accepts the name of a city
//  and its country. The function should print a simple sentence, such as Karachi is in Pakistan.
//  Give the parameter for the country a default value. Call your function for three different cities,
// at least one of which is not in the default country.

function describeCity(city: string, country: string = "USA"): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describeCity("New York");
describeCity("Paris", "France");
describeCity("Los Angeles");


// Print:
// New York is in USA.
// Paris is in France.   
// Los Angeles is in USA








