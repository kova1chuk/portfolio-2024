"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import DescriptionMergeSort from "./DescriptionMergeSort";
import MergeSortVisualizer from "./MergeSortVisualizer";

const generateRandomArray = (length: number): number[] => {
  return Array.from({ length }, () => Math.floor(Math.random() * 100));
};

function merge<T extends number>(left: T[], right: T[]): T[] {
  const result: T[] = [];
  let i = 0;
  let j = 0;

  // Merge the two arrays while maintaining sorted order
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Append any remaining elements
  return [...result, ...left.slice(i), ...right.slice(j)];
}

function mergeSort<T extends number>(arr: T[]): T[] {
  // Base case: If the array has 0 or 1 element, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursive sorting and merging
  return merge(mergeSort(left), mergeSort(right));
}

const MergeSort: NextPage = () => {
  const [arrays, setArrays] = useState<number[][]>([]);

  useEffect(() => {
    const arrays = Array.from({ length: 5 }, () => {
      const length = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
      return generateRandomArray(length);
    });

    setArrays(arrays);
  }, []);

  const refreshArray = (index: number) => {
    setArrays((prevArrays) =>
      prevArrays.map((array, i) =>
        i === index
          ? generateRandomArray(Math.floor(Math.random() * (25 - 10 + 1)) + 10)
          : array
      )
    );
  };

  return (
    <div>
      <main className="min-h-screen bg-indigo-300 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">MergeSort</h1>
        <DescriptionMergeSort />
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Random Arrays</h2>
          {arrays.map((array, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 space-y-4"
            >
              <h3 className="text-xl font-medium text-green-950">
                Array {index + 1} (Length: {array.length})
              </h3>
              <p className="text-gray-700 break-words">{array.join(", ")}</p>
              <h3 className="text-xl font-medium text-green-950">
                Sorted Array {index + 1} (Length: {array.length})
              </h3>
              <p className="text-gray-700 break-words">
                {mergeSort(array).join(", ")}
              </p>
              <button
                onClick={() => refreshArray(index)}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600"
              >
                Refresh Array
              </button>
              <MergeSortVisualizer initialArray={array} />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default MergeSort;
