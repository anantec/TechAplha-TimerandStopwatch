import Image from "next/image";
import Timer from "../src/timer";
import Stopwatch from "../src/stopwatch";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl font-bold mb-4">Timer and Stopwatch Example</h1>
    <Timer initialTime={30} />
    <Stopwatch initialTime={0} />
  </div>
  );
}
