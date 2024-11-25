function compareMemoryPerformance(size = 100000) {
    function measureMemoryUsage() {
        const used = process.memoryUsage();
        return used.heapUsed / 1024 / 1024; // Convert to MB
    }
    console.log('\nMemory Usage Performance Test:');
    // Measure initial memory
    const before = measureMemoryUsage();
    // Measure Array memory
    const array = Array.from({ length: size }, () => Math.random());
    const afterArray = measureMemoryUsage();
    // Measure Set memory
    const set = new Set(array);
    const afterSet = measureMemoryUsage();
    // Calculate differences
    const arrayUsage = afterArray - before;
    const setUsage = afterSet - afterArray;
    console.log(`Array Memory Usage (MB): ${arrayUsage.toFixed(4)}`);
    console.log(`Set Memory Usage (MB): ${setUsage.toFixed(4)}`);
    console.log(`Percentage Difference: ${Math.abs((setUsage - arrayUsage) / arrayUsage * 100).toFixed(2)}%`);
}

compareMemoryPerformance(100);