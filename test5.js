// test5.js - Set Operations Performance
function compareSetOperationsPerformance(size = 100000) {
    const array1 = Array.from({ length: size }, () => Math.floor(Math.random() * size));
    const array2 = Array.from({ length: size }, () => Math.floor(Math.random() * size));

    console.log('\nSet Operations Performance Test:');

    const arrayStart = performance.now();
    const arrayIntersection = array1.filter(x => array2.includes(x));
    const arrayTime = performance.now() - arrayStart;

    const set1 = new Set(array1);
    const set2 = new Set(array2);
    const setStart = performance.now();
    const setIntersection = new Set([...set1].filter(x => set2.has(x)));
    const setTime = performance.now() - setStart;

    console.log(`Array intersection: ${arrayTime.toFixed(4)}ms`);
    console.log(`Set intersection: ${setTime.toFixed(4)}ms`);
    console.log(`Percentage Difference: ${Math.abs((arrayTime - setTime) / setTime * 100).toFixed(2)}%`);
}

compareSetOperationsPerformance(100);