"use client";

import { useState, useMemo } from "react";
import useCounter from "@/hook/countHook";

export default function UseMemo() {
  const [number, setNumber] = useState<number>(0);
  //   const [count, setCount] = useState<number>(0);
  const [count, increment] = useCounter(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 3000000000) {
      i++;
    }
    return number % 2 === 0;
  }, [number]);

  //   function isEven() {
  //     let i = 0;
  //     while (i < 3000000000) {
  //       i++;
  //     }
  //     return number % 2 === 0;
  //   }

  return (
    <div>
      number is {isEven ? "Even" : "Odd"}
      <div className="flex flex-col w-[400px]">
        number: {number}
        <button
          className="border border-black rounded-md p-2"
          onClick={() => setNumber(number + 1)}
        >
          Increment Number
        </button>
      </div>
      <div className="flex flex-col w-[400px]">
        count: {count}
        <button
          className="border border-black rounded-md p-2"
          onClick={increment}
        >
          Increment Count
        </button>
      </div>
    </div>
  );
}
