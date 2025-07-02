import { useState } from "react";

const TodoInput = ({ setTaskList }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        onClick={() => {
          const newTask = { id: Number(new Date()), content: inputValue, isDone: false };
          setTaskList((prev) => [...prev, newTask]);
          setInputValue("");
        }}
      >
        추가하기
      </button>
    </>
  );
}

export default TodoInput