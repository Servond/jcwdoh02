import { memo } from "react";

function Todo({ todos, addTask }: { todos: string[]; addTask: () => void }) {
  // akan berjalan jika component terender ulang
  console.log("render ulang");

  return (
    <div>
      {todos.map((todo, idx) => (
        <p key={idx}>{todo}</p>
      ))}
      <button onClick={addTask}>Add Todo</button>
    </div>
  );
}

export default memo(Todo);
