import quickSort from "./quickSort";

// Test suite for quickSort
describe(" - quickSort Function", () => {
  // Test for empty array
  test("should return an empty array when input is empty", () => {
    expect(quickSort([])).toEqual([]);
  });

  // Test for single element
  test("should return the same array when it contains one element", () => {
    expect(quickSort([1])).toEqual([1]);
  });

  // Test for already sorted array
  test("should return the same array when it is already sorted", () => {
    expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  // Test for reverse-sorted array
  test("should sort a reverse-sorted array", () => {
    expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  // Test for array with duplicate values
  test("should handle arrays with duplicate values", () => {
    expect(quickSort([3, 1, 2, 3, 1])).toEqual([1, 1, 2, 3, 3]);
  });

  // Test for large arrays
  test("should sort large arrays efficiently", () => {
    const largeArray = Array.from({ length: 1000 }, () =>
      Math.floor(Math.random() * 1000)
    );
    const sortedArray = [...largeArray].sort((a, b) => a - b);
    expect(quickSort(largeArray)).toEqual(sortedArray);
  });
});
