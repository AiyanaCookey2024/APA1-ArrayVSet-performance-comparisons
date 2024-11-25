// test1.js - Lookup Performance
function compareLookupPerformance(size = 100000) {
  const data = Array.from({ length: size }, () => Math.random());

  // Array lookup
  const arrayStart = performance.now();
  const testValue = data[Math.floor(data.length / 2)];
  const exists = data.includes(testValue);
  const arrayTime = performance.now() - arrayStart;

  // Set lookup
  const dataSet = new Set(data);
  const setStart = performance.now();
  const setExists = dataSet.has(testValue);
  const setTime = performance.now() - setStart;

  console.log('\nLookup Performance Test:');
  console.log(`Array includes(): ${arrayTime.toFixed(4)}ms`);
  console.log(`Set has(): ${setTime.toFixed(4)}ms`);
  console.log(`Percentage Difference: ${Math.abs((arrayTime - setTime) / setTime * 100).toFixed(2)}%`);
}

compareLookupPerformance(100)