// test3.js - Operations Performance
function compareOperationsPerformance(size = 100000) {
    const elements = Array.from({ length: size }, (_, i) => i);

    // Array operations
    const arrayStart = performance.now();
    const array = [];
    elements.forEach(elem => array.push(elem));
    for (let i = Math.floor(size / 2); i < Math.floor(size / 2) + 100; i++) {
        array.splice(array.indexOf(i), 1);
    }
    const arrayTime = performance.now() - arrayStart;

    // Set operations
    const setStart = performance.now();
    const set = new Set();
    elements.forEach(elem => set.add(elem));
    for (let i = Math.floor(size / 2); i < Math.floor(size / 2) + 100; i++) {
        set.delete(i);
    }
    const setTime = performance.now() - setStart;

    console.log('\nOperations Performance Test:');
    console.log(`Array operations: ${arrayTime.toFixed(4)}ms`);
    console.log(`Set operations: ${setTime.toFixed(4)}ms`);
    console.log(`Percentage Difference: ${Math.abs((arrayTime - setTime) / setTime * 100).toFixed(2)}%`);
}

compareOperationsPerformance(100);