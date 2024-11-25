// Creating an empty array
const myArray = [];

// Creating an array with initial values
const colours = ["red", "green", "blue"];

myArray.push("apple");  // Adds "apple" to the end of the array
myArray.push("banana"); // Adds "banana" to the end 
console.log(myArray);   // Output: ["apple", "banana"]

myArray.unshift("grape"); // Adds "grape" to the beginning
console.log(myArray);   // Output: ["grape", "apple", "banana"]

const lastItem = myArray.pop();  // Removes and returns the last item ("banana")
console.log(lastItem);  // Output: "banana"
console.log(myArray);   // Output: ["grape", "apple"]

const firstItem = myArray.shift(); // Removes and returns the first item ("grape")
console.log(firstItem);  // Output: "grape"
console.log(myArray);   // Output: ["apple"]

console.log(colours.indexOf("green")); // Returns the index of "green" (1)
console.log(colours.includes("yellow")); // Checks if "yellow" exists (false)

colours.splice(1, 1, "purple"); // Replaces "green" with "purple"
console.log(colours);   // Output: ["red", "purple", "blue"]

console.log(colours.length); // Returns the number of elements (3)

colours.length = 0;  // Clears the array (alternative to splice)
console.log(colours);   // Output: []