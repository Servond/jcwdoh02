"use client";

import { useState } from "react";

export default function UseState() {
  // Menggunakan State
  const [countState, setCountState] = useState<number>(0);

  // Menggunakan Variable
  let countVar: number = 0;
  return (
    <div>
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
        count: {countState}
        <button
          className="p-4 bg-grey-300 rounded-md hover:bg-grey-400"
          onClick={() => setCountState(countState + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
