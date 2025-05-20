"use client";

import { useRef, useEffect } from "react";
import { useEmail } from "@/context/emailContext";

export default function UseRef({ nama }: { nama: string }) {
  const { email } = useEmail();
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      Hello {nama}, {email}
      <input
        className="border-2 border-black rounded-md p-2"
        type="text"
        ref={inputRef}
      />
      <button
        className="border-2 border-black rounded-md p-2"
        onClick={() => {
          inputRef.current?.focus();
          console.log(inputRef.current);
        }}
      >
        Focus
      </button>
    </div>
  );
}
