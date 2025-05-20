"use client";

import { useState } from "react";
import { useEmail } from "@/context/emailContext";
import useCounter from "@/hook/countHook";

export default function UseState({ nama }: { nama: string }) {
  const { email } = useEmail();
  const [count, increment] = useCounter(0);
  // Menggunakan State
  const [countState, setCountState] = useState<number>(0);

  // Menggunakan Variable
  let countVar: number = 0;
  return (
    <div>
      Hello {nama}, {email}
      <div>
        <p>Menggunakan Variable</p>
        count: {countVar}
        <button
          className="p-4 bg-grey-300 rounded-md hover:bg-grey-400"
          onClick={() => {
            countVar++;
            console.log(countVar);
          }}
        >
          Increment
        </button>
      </div>
      <div>
        <p>Menggunakan State</p>
        count: {count}
        <button
          className="p-4 bg-grey-300 rounded-md hover:bg-grey-400"
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
