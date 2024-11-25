import Expandable from "@/components/algorithms/Expandable";
import MergeSort from "@/components/algorithms/MergeSort";
import QuickSort from "@/components/algorithms/QuickSort";
import { NextPage } from "next";
import Head from "next/head";

const Algorithms: NextPage = () => {
  return (
    <>
      <Head>
        <title>Algorithms</title>
        <meta
          name="description"
          content="A collection of algorithm implementations."
        />
      </Head>
      <main>
        <h1>Algorithms</h1>
        <p>Explore various algorithm implementations below.</p>
        <Expandable title="Quick Sort">
          <QuickSort />
        </Expandable>
        <Expandable title="Merge Sort">
          <MergeSort />
        </Expandable>
      </main>
    </>
  );
};

export default Algorithms;
