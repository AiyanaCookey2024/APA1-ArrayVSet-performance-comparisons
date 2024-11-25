function compareIteration(size = 1000000) {
    const data = Array.from({ length: size }, (_, i) => i);
    const dataSet = new Set(data);

    // Array forEach
    const arrayStart = performance.now();
    data.forEach(item => { let x = item * 2 });
    const arrayTime = performance.now() - arrayStart;

    // Set forEach
    const setStart = performance.now();
    dataSet.forEach(item => { let x = item * 2 });
    const setTime = performance.now() - setStart;

    // For...of Array
    const arrayForStart = performance.now();
    for (const item of data) { let x = item * 2 };
    const arrayForTime = performance.now() - arrayForStart;

    // For...of Set
    const setForStart = performance.now();
    for (const item of dataSet) { let x = item * 2 };
    const setForTime = performance.now() - setForStart;

    console.log(`Array forEach: ${arrayTime.toFixed(4)}ms`);
    console.log(`Set forEach: ${setTime.toFixed(4)}ms`);
    console.log(`Array for...of: ${arrayForTime.toFixed(4)}ms`);
    console.log(`Set for...of: ${setForTime.toFixed(4)}ms`);

    console.log('\nPercentage Differences:');
    console.log(`forEach (Array vs Set): ${Math.abs((arrayTime - setTime) / setTime * 100).toFixed(2)}%`);
    console.log(`for...of (Array vs Set): ${Math.abs((arrayForTime - setForTime) / setForTime * 100).toFixed(2)}%`);
    console.log(`Array (forEach vs for...of): ${Math.abs((arrayTime - arrayForTime) / arrayForTime * 100).toFixed(2)}%`);
    console.log(`Set (forEach vs for...of): ${Math.abs((setTime - setForTime) / setForTime * 100).toFixed(2)}%`);
}

compareIteration(100);