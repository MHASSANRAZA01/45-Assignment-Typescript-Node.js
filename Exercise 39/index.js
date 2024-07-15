// Question No 39: City Names: Write a function called city_country() that takes in the name 
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Calling the function with three city-country pairs
var cityCountry1 = cityCountry("Karachi", "Pakistan");
var cityCountry2 = cityCountry("Tokyo", "Japan");
var cityCountry3 = cityCountry("Berlin", "Germany");
// Printing the returned values
console.log(cityCountry1);
console.log(cityCountry2);
console.log(cityCountry3);
// Print:
// Karachi, Pakistan
// Tokyo, Japan
// Berlin, Germany
