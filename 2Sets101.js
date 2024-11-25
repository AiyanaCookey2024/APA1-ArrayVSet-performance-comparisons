// Creating an empty set
const uniqueUsernames = new Set(); 

// Creating a set with initial values
const productIDs = new Set(["A1", "B2", "B3" , "B4", "B5"]); 

uniqueUsernames.add("sjr"); // Adds element sjr to the set
uniqueUsernames.add("sjr"); // Adding a duplicate to a set is a no-op, (it does not raise an error), nor does it modify the existing set.
console.log(uniqueUsernames);

if (!uniqueUsernames.has("sjr")) {
  uniqueUsernames.add("sjr"); 
  console.log("Added"); 
} else { 
  console.log("Cannot add a duplicate"); 
}

uniqueUsernames.add(555); // Adds element 555 to the set (Sets have heterogeniety)
uniqueUsernames.delete(3); // Removes element 3 from the set (a no-op if it doesn't exist)

console.log(uniqueUsernames.size); 

productIDs.clear(); // Removes all elements from the set
console.log(productIDs);