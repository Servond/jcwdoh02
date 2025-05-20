"use client";
import { useState, useCallback } from "react";

import Todo from "./component/todo";
export default function UseCallback() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);

  const addTask = useCallback(() => {
    setTodos((x) => [...x, "New Task"]);
  }, [todos]);

  //   function addTask() {
  //     setTodos((x) => [...x, "New Task"]);
  //   }

  return (
    <div>
      <div className="flex flex-col w-[400px]">
        count: {count}
        <button
          className="border border-black rounded-md p-2"
          onClick={() => setCount(count + 1)}
        >
          Increment Count
        </button>
      </div>
      <Todo todos={todos} addTask={addTask} />
    </div>
  );
}
