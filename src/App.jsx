import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const App = () => {
  const [taskList, setTaskList] = useState([
    { id: 0, content: "123", isDone: false },
    { id: 1, content: "코딩 공부하기", isDone: false },
    { id: 2, content: "잠 자기", isDone: false },
  ])

  const todoList = taskList.filter((task) => !task.isDone)
  const doneList = taskList.filter((task) => task.isDone)

  console.log("---- re-rendered:", taskList)
  return (
    <>
      <TodoList todoList={doneList} setTaskList={setTaskList} />
      <hr />
      <TodoList todoList={todoList} setTaskList={setTaskList} />
      <hr />
      <TodoInput setTaskList={setTaskList} />
    </>
  );
}


export default App;
