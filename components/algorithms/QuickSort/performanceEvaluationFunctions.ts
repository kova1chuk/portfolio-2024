import quickSort from "./quickSort";

// Function to measure execution time
function measureExecutionTime<T extends number>(
  arr: T[]
): { time: number; result: T[] } {
  const startTime = performance.now();
  const result = quickSort(arr);
  const endTime = performance.now();
  return { time: endTime - startTime, result };
}

// Function to measure memory usage
function measureMemoryUsage<T extends number>(
  arr: T[]
): { memoryUsed: number; result: T[] } {
  const initialMemory = process.memoryUsage().heapUsed;
  const result = quickSort(arr);
  const finalMemory = process.memoryUsage().heapUsed;
  return { memoryUsed: finalMemory - initialMemory, result };
}

// Example usage:
const testArray = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 10000)
);

// Measure execution time
const timeMetrics = measureExecutionTime(testArray);
console.log(`Execution Time: ${timeMetrics.time.toFixed(2)} ms`);

// Measure memory usage
const memoryMetrics = measureMemoryUsage(testArray);
console.log(`Memory Usage: ${(memoryMetrics.memoryUsed / 1024).toFixed(2)} KB`);
