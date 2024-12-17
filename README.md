# JavaScript Arrays vs Sets Performance Testing Suite

## Learning Objectives 📒
- Understand performance differences between Arrays and Sets in JavaScript
- Compare time and space complexity of common operations
- Make informed decisions about data structure selection

## Test Files Overview 🔎

### Basic Concepts 👶
- `1Arrays101.js`: Basic Array operations and methods
- `2Sets101.js`: Basic Set operations and methods

### Performance Tests 🏃‍♀️
1. `test1.js`: Lookup Performance (`includes()` vs `has()`)
2. `test2.js`: Memory Usage Comparison
3. `test3.js`: Add/Remove Operations Performance
4. `test4.js`: Iteration Performance (forEach and for...of)
5. `test5.js`: Set Operations (intersection performance)
6. `test6.js`: Bulk Operations Performance

## Working with the tests ℹ

1. Read through a file first. Make sure you understand what is happening.
1. Start with small datasets (size = 100)
1. Gradually increase size (1000, 10000, 100000)
1. Compare and analyse results
1. Run each test multiple times for consistent results

## Key Comparisons 🗝️

- Lookup Operations: Array.includes() (O(n)) vs Set.has() (O(1))
- Memory Usage: Arrays vs Sets
- Add/Remove Operations: Array.splice() vs Set.delete()
- Iteration Methods: forEach vs for...of
- Set Operations: Array-based vs Set-based implementations
- Bulk Operations: Performance with large datasets

## Discussion Points 🗣️
- When to use Arrays vs Sets
- Performance implications for large datasets
- Memory trade-offs
- Best practices for different use cases


## Practical Application: Username Validator 👥
- `practicalApplication.js`: Real-world example comparing Array and Set performance
- Demonstrates username validation and storage
- Shows real-time performance comparison between Array and Set operations
- Great starting point for understanding data structure selection



## Running the Files
- Performance Tests: ```node testX.js``` (replace X with test number)
- Basic Concepts: ```node 1Arrays101.js``` or ```node 2Sets101.js```
- Practical Example: ```node practicalApplication.js```