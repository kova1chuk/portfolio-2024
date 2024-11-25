"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import DescriptionQuickSort from "./DescriptionQuickSort";
import QuickSortVisualizer from "./QuickSortVisualizer";
import quickSort from "./quickSort";

const generateRandomArray = (length: number): number[] => {
  return Array.from({ length }, () => Math.floor(Math.random() * 100));
};

const QuickSort: NextPage = () => {
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
      <main className="min-h-screen bg-sky-300 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">QuickSort</h1>
        <DescriptionQuickSort />
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
                {quickSort(array).join(", ")}
              </p>
              <button
                onClick={() => refreshArray(index)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
              >
                Refresh Array
              </button>
              <QuickSortVisualizer initialArray={array} />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default QuickSort;
