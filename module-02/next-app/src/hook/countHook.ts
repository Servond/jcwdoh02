"use client";

import { useState } from "react";

export default function useCounter(val: number) {
  const [count, setCount] = useState<number>(val);

  function increment() {
    setCount(count + 1);
  }

  return [count, increment] as const;
}
