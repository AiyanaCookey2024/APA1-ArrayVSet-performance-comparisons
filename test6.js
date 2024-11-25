// test6.js - Bulk Operations Performance
function compareBulkOperationsPerformance(size = 100000) {
    const elements = Array.from({ length: size }, (_, i) => i);

    console.log('\nBulk Operations Performance Test:');

    const arrayStart = performance.now();
    const array = [];
    array.push(...elements);
    const arrayTime = performance.now() - arrayStart;

    const setStart = performance.now();
    const set = new Set(elements);
    const setTime = performance.now() - setStart;

    console.log(`Array bulk insert: ${arrayTime.toFixed(4)}ms`);
    console.log(`Set bulk insert: ${setTime.toFixed(4)}ms`);
    console.log(`Percentage Difference: ${Math.abs((arrayTime - setTime) / setTime * 100).toFixed(2)}%`);
}

compareBulkOperationsPerformance(100);