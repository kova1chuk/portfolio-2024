"use client";
import React, { useEffect, useState } from "react";

// Helper to delay steps for visualization
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const QuickSortVisualizer: React.FC<{ initialArray: number[] }> = ({
  initialArray,
}) => {
  const [array, setArray] = useState<number[]>(initialArray);
  const [colors, setColors] = useState<string[]>(
    Array(array.length).fill("lightgray")
  );
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    setArray(initialArray);
    setColors(Array(initialArray.length).fill("lightgray"));
  }, [initialArray]);

  // Partition function
  const partition = async (arr: number[], start: number, end: number) => {
    const pivot = arr[end];
    let i = start - 1;

    setColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[end] = "red"; // Highlight pivot
      return newColors;
    });

    for (let j = start; j < end; j++) {
      setColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[j] = "yellow"; // Highlight element being compared
        return newColors;
      });

      await sleep(500); // Delay for visualization

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        setArray([...arr]); // Update the array in state
      }

      setColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[j] = "lightgray"; // Reset color after comparison
        return newColors;
      });
    }

    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]]; // Swap pivot into position
    setArray([...arr]); // Update the array in state

    setColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[end] = "lightgray"; // Reset pivot color
      newColors[i + 1] = "blue"; // Highlight pivot's final position
      return newColors;
    });

    await sleep(500); // Delay for visualization
    return i + 1;
  };

  // Quick Sort implementation with visualization
  const quickSort = async (arr: number[], start: number, end: number) => {
    if (start >= end) return;

    const pivotIndex = await partition(arr, start, end);

    // Recursive sorting for left and right partitions
    await quickSort(arr, start, pivotIndex - 1);
    await quickSort(arr, pivotIndex + 1, end);

    // Mark the array as sorted
    if (start === 0 && end === arr.length - 1) {
      setColors(Array(arr.length).fill("green"));
    }
  };

  const handleSort = async () => {
    setSorting(true);
    await quickSort([...array], 0, array.length - 1);
    setSorting(false);
  };

  const resetArray = () => {
    setArray(initialArray);
    setColors(Array(array.length).fill("lightgray"));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Quick Sort Visualizer</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          height: "200px",
        }}
      >
        {array.map((value, index) => (
          <div
            key={index}
            style={{
              width: "30px",
              height: `${value}px`,
              backgroundColor: colors[index],
              margin: "0 5px",
              display: "inline-block",
              transition: "0.3s ease all",
            }}
          />
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleSort} disabled={sorting}>
          {sorting ? "Sorting..." : "Start Quick Sort"}
        </button>
        <button
          onClick={resetArray}
          style={{ marginLeft: "10px" }}
          disabled={sorting}
        >
          Reset Array
        </button>
      </div>
    </div>
  );
};

export default QuickSortVisualizer;
