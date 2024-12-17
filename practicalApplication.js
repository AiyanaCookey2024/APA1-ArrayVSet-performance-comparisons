// Username storage
const usernameArray = [];
const usernameSet = new Set();

function isValidUsername(username) {
    return username.length >= 3 && username.length <= 15;
}

function addUsername(username) {
    if (!isValidUsername(username)) {
        return "Username must be between 3 and 15 characters";
    }

    // Compare lookup speeds
    const arrayStart = performance.now();
    const existsInArray = usernameArray.includes(username);
    const arrayTime = performance.now() - arrayStart;

    const setStart = performance.now();
    const existsInSet = usernameSet.has(username);
    const setTime = performance.now() - setStart;

    if (existsInArray || existsInSet) {
        return `Username already exists!\nArray lookup: ${arrayTime.toFixed(4)}ms\nSet lookup: ${setTime.toFixed(4)}ms`;
    }

    usernameArray.push(username);
    usernameSet.add(username);
    return `Username '${username}' added successfully!\nArray lookup: ${arrayTime.toFixed(4)}ms\nSet lookup: ${setTime.toFixed(4)}ms`;
}

// Test the system
console.log(addUsername("ali"));           // Should work
console.log(addUsername("ali"));           // Should fail (duplicate)
console.log(addUsername("ab"));            // Should fail (too short)
console.log(addUsername("khadeejasharma"));       // Should work
console.log("\nStored Usernames:");
console.log("Array:", usernameArray);
console.log("Set:", usernameSet);