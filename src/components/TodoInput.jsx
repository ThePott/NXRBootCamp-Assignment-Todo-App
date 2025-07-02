import { useState } from "react";

const TodoInput = ({ setTaskList }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <li>
      <input
        className="long"
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
    </li>
  );
}

export default TodoInput