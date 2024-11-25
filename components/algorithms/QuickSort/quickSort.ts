function quickSort<T extends number>(arr: T[]): T[] {
  // Base case: If the array has 0 or 1 element, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose the pivot (here, the last element)
  const pivot = arr[arr.length - 1];
  const left: T[] = []; // Elements smaller than pivot
  const right: T[] = []; // Elements larger than pivot

  // Partition the array
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort left and right, then concatenate
  return [...quickSort(left), pivot, ...quickSort(right)];
}

export default quickSort;
