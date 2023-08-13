let largeCountries = ["China","India","USA","Indonesia","Pakistan"] // stated array

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
console.log("The 5 largest countries in the world:") // console logs string ""
// for loop
// var |   start            |             end               |           count
// (let    i = 0;                i < largeCountries.length;                i++)
for (let i = 0; i < largeCountries.length; i++) { // in practice
    console.log("- " + largeCountries[i]) // console logs array with string "- " in front
}

// This exercise is to demonstrate knowledge on for loops.