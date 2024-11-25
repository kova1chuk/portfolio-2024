"use client";
import React, { useEffect, useState } from "react";

interface MergeSortVisualizerProps {
  initialArray: number[];
}

const MergeSortVisualizer: React.FC<MergeSortVisualizerProps> = ({
  initialArray,
}) => {
  const [array, setArray] = useState<number[]>([]);
  const [currentMerge, setCurrentMerge] = useState<number[]>([]);
  const [merging, setMerging] = useState(false);

  useEffect(() => {
    setArray(initialArray);
  }, [initialArray]);

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const mergeSortVisualized = async (arr: number[]): Promise<number[]> => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const sortedLeft = await mergeSortVisualized(left);
    const sortedRight = await mergeSortVisualized(right);

    const merged = await merge(sortedLeft, sortedRight);
    return merged;
  };

  const merge = async (left: number[], right: number[]): Promise<number[]> => {
    let result: number[] = [];
    let i = 0;
    let j = 0;

    setMerging(true);
    setCurrentMerge([...left, ...right]);
    await sleep(500);

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
      setCurrentMerge([...result, ...left.slice(i), ...right.slice(j)]);
      await sleep(500);
    }

    result = [...result, ...left.slice(i), ...right.slice(j)];
    setCurrentMerge(result);
    await sleep(500);
    setMerging(false);
    return result;
  };

  const startSort = async () => {
    const sortedArray = await mergeSortVisualized(array);
    setArray(sortedArray);
    setCurrentMerge([]);
  };

  return (
    <div>
      <h4 className="text-lg font-semibold">Merge Sort Visualization</h4>
      <div className="flex space-x-1 mt-4">
        {array.map((value, index) => (
          <div
            key={index}
            style={{
              height: `${value * 3}px`,
              width: "20px",
              backgroundColor: merging
                ? currentMerge.includes(value)
                  ? "orange"
                  : "lightgray"
                : "lightblue",
              transition: "0.3s",
            }}
          />
        ))}
      </div>
      <button
        onClick={startSort}
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow mt-4 hover:bg-green-600"
        disabled={merging}
      >
        {merging ? "Sorting..." : "Start Merge Sort"}
      </button>
    </div>
  );
};

export default MergeSortVisualizer;
